'use client'
import { useState } from 'react'
import { Plus, Loader2 } from 'lucide-react'
import FailedModal from './failed-modal'
import { Input } from '@/components/input'
import telemedicineApi from '@/api/telemedicine'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { Session } from 'next-auth'
import { useSnackbar } from 'notistack'
import { OrganizationMember } from '@/definition'
import RemoveMemberButton from './remove-member-button'

export default function MembersList({ members, org_id }: { members: OrganizationMember[], org_id: string }) {
  const [email, setEmail] = useState('')
  // const [phoneNumber, setPhoneNumber] = useState('') 
  const [showForm, setShowForm] = useState(false)
  const [showExistsModal, setShowExistsModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { enqueueSnackbar } = useSnackbar()

  const { data: session } = useSession()
  const router = useRouter()

  const [title, setTitle] = useState<string | null>(null)
  const [description, setDescription] = useState<string | null>(null)



  const addMember = async () => {
    if (email) {
      const memberExists = members.some(
        (member) => member.userid.email === email
      )
      if (memberExists) {
        setTitle('Member already exists')
        setDescription('User already exists in this organization')
        setShowExistsModal(true)
      } else {
        setIsLoading(true)
        try {
          await telemedicineApi.organization.addMember({
            email,
            organizationid: org_id,
            userid: session?.user.id as string,
            session: session as Session
          })
          router.refresh()
          enqueueSnackbar('Member added successfully', { variant: 'success' })
          setEmail('')
          setShowForm(false)
        } catch (error) {
          if (error instanceof Error && error.message.includes('found')) {
            setTitle(null)
            setDescription(null)
            setShowExistsModal(true)
          } else {
            enqueueSnackbar('Error adding member', { variant: 'error' })
          }
        } finally {
          setIsLoading(false)
        }
      }
    }
  }

  const handleSaveInformation = () => {
    addMember()
  }
  const closeExistsModal = () => {
    setShowExistsModal(false)
  }
  return (
    <div>
      <div className="">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Organization Members</h2>

          {showForm ? (
            <>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 focus:px-4 border border-gray-300 rounded"
                  placeholder="Enter email"
                />
              </div>
              {/* <div className="mb-4">
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full px-4 focus:px-4 border border-gray-300 rounded"
                  placeholder="Enter phone number"
                /> 
                
              </div>
                */}
              <div className="flex justify-between items-center mb-4">
                <button
                  onClick={handleSaveInformation}
                  className="bg-[#F2A900] text-white py-2 px-4 flex items-center gap-2 justify-center rounded hover:bg-[#D99200] transition-colors"
                >
                  {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'SAVE INFORMATION'}
                </button>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-600 hover:text-gray-800"
                >
                  Done
                </button>
              </div>
            </>
          ) : (
            <button
              onClick={() => setShowForm(true)}
              className="flex items-center text-[#F2A900] font-semibold mb-4 hover:underline"
            >
              <Plus className="w-4 h-4 mr-2" />
              ADD ANOTHER EMPLOYEE
            </button>
          )}
          {members.map((member, index) => (
            <div key={index} className="bg-gray-600 text-white p-4 rounded mb-2 flex justify-between items-center">
              <div>
                <p>Email: {member.userid.email}</p>
                <p>Phone Number: {member.userid.phone}</p>
              </div>
              <RemoveMemberButton memberId={member._id} organizationid={org_id} />
            </div>
          ))}
        </div>
      </div>
      {showExistsModal && <FailedModal title={title} description={description} showExistsModal={showExistsModal} closeExistsModal={closeExistsModal} />}
    </div>
  )
}