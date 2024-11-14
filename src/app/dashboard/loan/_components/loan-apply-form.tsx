import { CreateOfferParams, Guarantor } from "@/api/loan";
import Button from "@/components/button";
import FileInput from "@/components/file-input";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";
import { ArrowRightSvg } from "@/components/svgs";
import { banksInNigeria } from "@/constants/banks";
import uploadToCloudinary from "@/util/upload-to-cloudinary";
import CollateralInput from "./collateral-input";
import { ShadButton } from "@/components/shadcn-button";


interface GuarantorInfoProps {
  guarantor: 1 | 2,
  fieldToUpdate: keyof Omit<CreateOfferParams, "userid" | "session">
  value: Guarantor
  handleFieldChangeAndUpdate: (field: keyof Omit<CreateOfferParams, "userid" | "session">, value: string | number | Guarantor) => void

}


const GuarantorInfo: React.FC<GuarantorInfoProps> = ({ guarantor, fieldToUpdate, value, handleFieldChangeAndUpdate }) => {

  const handleFieldChange = (field: 'email' | 'phone' | 'workstatus' | 'name' | 'address' | 'relationship' | 'residential_address' | 'utility', v: string) => {
    const updatedValue = {
      ...value,
      [field]: v
    }
    handleFieldChangeAndUpdate(fieldToUpdate, updatedValue)
  }

  const handleUpload = async (file: File, field?: keyof Omit<CreateOfferParams, "userid" | "session">, setLoading?: (loading: boolean) => void) => {
    const formData = new FormData();
    formData.append('file', file);
    setLoading && setLoading(true);
    try {
      const url = await uploadToCloudinary(file);
      const updatedValue = {
        ...value,
        [field ?? 'utility']: url
      }
      handleFieldChangeAndUpdate(fieldToUpdate, updatedValue);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading && setLoading(false);
    }
  }

  return (
    <div className="space-y-4 rounded-md border border-gray-200 p-4">
      <div>
        <Label className="block pb-2" htmlFor={`guarantor-name-${guarantor}`}>
          Name of Guarantor {guarantor}
        </Label>
        <Input
          id={`guarantor-name-${guarantor}`}
          placeholder="Enter guarantor's name"
          value={value.name}
          onChange={(e) => handleFieldChange('name', e.target.value)}
        />
      </div>
      <div>
        <Label
          className="block pb-2"
          htmlFor={`guarantor-relationship-${guarantor}`}
        >
          Relationship
        </Label>
        <Input
          id={`guarantor-relationship-${guarantor}`}
          placeholder="What is your relationship with this contact?"
          value={value.relationship}
          onChange={(e) => handleFieldChange('relationship', e.target.value)}
        />
      </div>
      <div>
        <Label className="block pb-2" htmlFor={`guarantor-address-${guarantor}`}>
          Detailed Residential Address
        </Label>
        <Input
          id={`guarantor-address-${guarantor}`}
          placeholder="Enter guarantor's residential address"
          value={value.residential_address}
          onChange={(e) => handleFieldChange('residential_address', e.target.value)}
        />
      </div>

      <div>
        <Label className="block pb-2" htmlFor={`guarantor-email-${guarantor}`}>
          Email
        </Label>
        <Input
          id={`guarantor-email-${guarantor}`}
          placeholder="Enter guarantor's email"
          value={value.email}
          onChange={(e) => handleFieldChange('email', e.target.value)}
        />
      </div>
      <div>
        <Label className="block pb-2" htmlFor={`guarantor-phone-${guarantor}`}>
          Phone Number
        </Label>
        <Input
          type="tel"
          id={`guarantor-phone-${guarantor}`}
          placeholder="Enter guarantor's phone number"
          value={value.phone}
          onChange={(e) => handleFieldChange('phone', e.target.value)}
        />
      </div>
      <div>
        <Label className="block pb-2" htmlFor={`guarantor-work-status-${guarantor}`}>
          Work Status
        </Label>
        <Input
          id={`guarantor-work-status-${guarantor}`}
          placeholder="Enter guarantor's work status"
          value={value.workstatus}
          onChange={(e) => handleFieldChange('workstatus', e.target.value)}
        />
      </div>
      <FileInput
        id={`guarantor-utility-upload-${guarantor}`}
        title="Utility bill, Water bill, PHCN, or rent agreement *"
        uploaded={!!value.utility}
        onUpload={handleUpload}
        field='utility'
      />
    </div>
  )
}

function LoanApplyForm({
  nextPage,
  applyData,
  prevPage,
  handleUpdateApplyDataField,
}: {
  nextPage: () => void;
  applyData: Omit<CreateOfferParams, "userid" | "session">;
  handleUpdateApplyDataField: (field: keyof Omit<CreateOfferParams, "userid" | "session">, value: string | number) => void;
  prevPage: () => void;
}) {
  // const [hasOutstandingLoan, setHasOutstandingLoan] = useState<boolean>(false);

  const handleFieldChangeAndUpdate = (field: keyof Omit<CreateOfferParams, "userid" | "session">, value: string | number | any) => {
    // setHasOutstandingLoan(value === 'yes');
    handleUpdateApplyDataField(field, value);
  };

  const handleUpload = async (file: File, field?: keyof Omit<CreateOfferParams, "userid" | "session">, setLoading?: (loading: boolean) => void) => {
    const formData = new FormData();
    formData.append('file', file);
    setLoading && setLoading(true);
    try {
      const url = await uploadToCloudinary(file);
      handleFieldChangeAndUpdate(field ?? 'utilitybill', url);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading && setLoading(false);
    }
  }



  return (
    <div className="min-h-screen">
      <div className="border-b border-gray-300 bg-gray-50 px-4 py-2">
        <button
          className="flex items-center gap-x-2 text-sm font-bold text-primary-500"
          onClick={prevPage}
        >
          <ArrowRightSvg className="h-4 w-4" /> Go Back
        </button>
      </div>
      <div className="w-full bg-white">
        <form
          className="max-w-4xl space-y-6 p-4 md:p-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="space-y-5">
            <h2 className="text-lg font-semibold">
              Provide the following information to be eligible for a loan{" "}
              <span className="text-gray-200">({applyData.amount} for {applyData.total_days} days)</span>
            </h2>


            <div>
              <Label className="block pb-2" htmlFor="bvn">
                BVN
              </Label>
              <Input id="bvn" value={applyData.bvn} onChange={(e) => {
                const numericValue = e.target.value.replace(/[^0-9]/g, '');
                handleFieldChangeAndUpdate('bvn', numericValue);
              }} placeholder="Please fill your BVN (10+ digits)" />
            </div>

            <div>
              <Label className="block pb-2" htmlFor="work-address">
                Work Address *
              </Label>
              <Input id="work-address" value={applyData.workaddress} onChange={(e) => handleFieldChangeAndUpdate('workaddress', e.target.value)} placeholder="Enter your work address" />
            </div>

            <div>
              <Label className="block pb-2" htmlFor="work-status">
                Work Status *
              </Label>
              <Select value={applyData.workstatus} onValueChange={(value) => handleFieldChangeAndUpdate('workstatus', value)}>
                <SelectTrigger id="work-status">
                  <SelectValue placeholder="Select work status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="employed">Employed</SelectItem>
                  <SelectItem value="self-employed">Self-employed</SelectItem>
                  <SelectItem value="unemployed">Unemployed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="block pb-2" htmlFor="bank-name">
                Bank Name *
              </Label>
              <Input
                id="bank-name"
                value={applyData.bankname}
                onChange={(e) => {
                  handleFieldChangeAndUpdate('bankname', e.target.value);
                  handleFieldChangeAndUpdate('bank_details', { ...applyData.bank_details, bankname: e.target.value });
                }}
                placeholder="Enter bank name"
                list="bank-names"
              />
              <datalist id="bank-names">
                {banksInNigeria.map((bank) => (
                  <option key={bank} value={bank} />
                ))}
              </datalist>
            </div>

            <div>
              <Label className="block pb-2" htmlFor="bank-branch">
                Bank Branch *
              </Label>
              <Input id="bank-branch" value={applyData.bankbranch} onChange={(e) => handleFieldChangeAndUpdate('bankbranch', e.target.value)} placeholder="Enter bank branch" />
            </div>

            <div className="space-x-2">
              <Label className="block pb-2">
                Do you have any outstanding loan? *
              </Label>
              <div className="flex gap-10 py-4">
                <div className="flex">
                  <input
                    type="radio"
                    id="outstanding-loan-yes"
                    name="outstanding-loan"
                    value="true"
                    checked={applyData.outstanding.owe}
                    onChange={(e) => handleFieldChangeAndUpdate('outstanding', {
                      ...applyData.outstanding,
                      owe: e.target.value === 'true'
                    })}
                    className="h-4 w-4 border-gray-300 text-primary-500 focus:ring-primary-500 active:bg-primary-500"
                  />
                  <Label className="ml-1 block" htmlFor="outstanding-loan-yes">
                    Yes
                  </Label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="outstanding-loan-no"
                    name="outstanding-loan"
                    value="false"
                    checked={!applyData.outstanding.owe}
                    onChange={(e) => handleFieldChangeAndUpdate('outstanding', {
                      ...applyData.outstanding,
                      owe: e.target.value === 'false'
                    })}
                    className="h-4 w-4 border-gray-300 text-primary-500 focus:ring-primary-500 active:bg-primary-500"
                  />
                  <Label className="ml-1 block" htmlFor="outstanding-loan-no">
                    No
                  </Label>
                </div>
              </div>
            </div>

            {applyData.outstanding.owe && (
              <div>
                <Label className="block pb-2" htmlFor="loan-details">
                  How much loan do you owe? *
                </Label>
                <Input
                  id="loan-details"
                  type="number"
                  value={applyData.outstanding.amount}
                  onChange={(e) => handleFieldChangeAndUpdate('outstanding', {
                    ...applyData.outstanding,
                    amount: Number(e.target.value)
                  })}
                  placeholder="Enter loan amount"
                />
              </div>
            )}

            <div>
              <Label className="block pb-2" htmlFor="residential-address">
                Detailed Residential Address *
              </Label>
              <Input
                id="residential-address"
                placeholder="Enter your residential address"
                value={applyData.residentialaddress}
                onChange={(e) => handleFieldChangeAndUpdate('residentialaddress', e.target.value)}
              />
            </div>

            <FileInput
              id="utility-bill-upload"
              uploaded={!!applyData.utilitybill}
              title="Utility bill, Water bill, PHCN, or rent agreement *"
              acceptedFileTypes="image/*"
              onUpload={handleUpload}
              field="utilitybill"
            />

            <div>
              <Label className="block pb-2" htmlFor="monthly-income">
                Monthly Income *
              </Label>
              <Select value={applyData.monthlyincome} defaultValue={applyData.monthlyincome} onValueChange={(value) => handleFieldChangeAndUpdate('monthlyincome', value)}>
                <SelectTrigger id="monthly-income">
                  <SelectValue placeholder="Select income range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-50000">₦0 - ₦50,000</SelectItem>
                  <SelectItem value="50001-100000">
                    ₦50,001 - ₦100,000
                  </SelectItem>
                  <SelectItem value="100001-200000">
                    ₦100,001 - ₦200,000
                  </SelectItem>
                  <SelectItem value="200001+">₦200,001+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <FileInput
              id="income-proof-upload"
              title="Proof of Income (3-6 months bank statements, salary slips, etc.) *"
              uploaded={!!applyData.proof_of_income}
              acceptedFileTypes="image/*"
              field="proof_of_income"
              onUpload={handleUpload}
            />
            {applyData.collaterals.map((c, idx) =>
              <CollateralInput
                index={idx}
                key={idx + 'jfdfmmb'}
                value={c}
                applyData={applyData}
                handleFieldChangeAndUpdate={handleFieldChangeAndUpdate}
              />
            )}

            <ShadButton variant="link" className="text-primary-500 p-0 py-0 hover:text-primary-600" onClick={() => handleFieldChangeAndUpdate('collaterals', [...applyData.collaterals, { item: "", proof_of_item: "" }])}>Add another collateral</ShadButton>


            {/* <FileInput id="doctors-report-upload" title="Doctor's Report *" /> */}

            <div className="space-y-4">
              <h3 className="font-semibold">Guarantor&apos;s Information *</h3>
              <GuarantorInfo value={applyData.guarantor_one} fieldToUpdate="guarantor_one" guarantor={1}
                handleFieldChangeAndUpdate={handleFieldChangeAndUpdate}
              />
              <GuarantorInfo value={applyData.guarantor_two} fieldToUpdate="guarantor_two" guarantor={2}
                handleFieldChangeAndUpdate={handleFieldChangeAndUpdate}
              />
            </div>
          </div>
          <Button
            onClick={nextPage}
            className="w-full rounded-lg bg-primary-500 py-3 text-white hover:bg-primary-600"
          >
            Continue
          </Button>
        </form>
      </div>
    </div>
  );
}

export default LoanApplyForm;
