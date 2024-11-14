
import React from "react";
import { ProgressBar } from "./progress-bar";
import { UserResumeResponse } from "@/definition";
import { CertificationItem, ContactItem, EducationItem, ExperienceItem, HobbyItem, LanguageItem, ReferenceItem, SkillItem } from "../(main)/resume/preview/_components";
import { Section } from "../(main)/resume/preview/_components";
import { Session } from "next-auth";
import Link from "next/link";
import { routes } from "@/constants/routes";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar";
import Image from "next/image";

export function ResumeView({ resume : data, session }: { resume: UserResumeResponse, session: Session }) {
const user = session.user;
   
  return <div className="p-0 py-5 md:px-4">
      <ProgressBar progress={10} />
      {!data &&   <div>
        <h2 className="mb-4 text-2xl text-secondary-500 font-bold">NO RESUME FOUND!</h2>
        <div className="flex w-full justify-end gap-4 md:gap-8">
          <div className="space-x-4">
            <Link href={routes.RECRUITMENTRESUME} className="rounded bg-yellow-500 px-4 py-3 font-bold text-white hover:bg-yellow-600">
              CREATE ONE NOW
            </Link>
           
          </div>
        </div>
        </div>
        }
    {data&&  <div className="">
        <h2 className="mb-4 text-2xl font-bold">Preview Resume</h2>
        <div className="flex w-full justify-end gap-4 md:gap-8">
          <div className="space-x-4">
            <button className="rounded bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600">
              PUBLISH NOW
            </button>
            <Link href={routes.RECRUITMENTRESUME} className="rounded border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50">
              EDIT RESUME
            </Link>
          </div>
        </div>

        <div className="mt-5 bg-gray-50 px-5 py-5">
          <div className="mb-6 flex items-start rounded-lg bg-white p-2 shadow">
         <Avatar
            className="h-12 w-12 mr-4"
            >
              <AvatarImage src={data.upload.picture} alt={user.firstname} />
              <AvatarFallback>{user.firstname[0]}{user.lastname[0]}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold">{user.firstname} {user.lastname}</h1>
              <p className="text-gray-600" 
              style={{
                wordBreak: 'break-word'
              }}
              >
                {data.bio}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2">
            <div className="">
              <Section title="EXPERIENCE" editable={true} editLink={routes.RECRUITMENT_WORK_EXPERIENCE +'/more'}>
               
                {data.work_experience.map((exp)=>(
                <ExperienceItem
                key={exp._id}
                  title={exp.title}
                  date={exp.start_date + ' - ' + (exp.end_date === ''?'Present':exp.end_date)}
                  description={''}
                /> 
                ))}

                {data.work_experience.length === 0 && (
                  <div className="flex flex-col items-center justify-center py-8 text-gray-500">
                    <p className="text-lg text-secondary-500">No work experience added yet</p>
                    <Link href={routes.RECRUITMENT_WORK_EXPERIENCE} className=" hover:underline">Click edit/here to add your work experience</Link>
                  </div>
                )}
               
              </Section>
              <Section title="CERTIFICATION" editable={true} editLink={routes.RECRUITMENT_RESUME_OTHER_CERTS +'/more'}>
                {data.certification.map((cert)=>(
                <CertificationItem
                key={cert._id}
                    title="Udemy"
                    subtitle="Introduction to Nursing"
                    date="2015 - 2019"
                  />
                ))}
                
                 {data.certification.length === 0 && (
                  <div className="flex flex-col items-center justify-center py-8 text-gray-500">
                    <p className="text-lg text-secondary-500">No certifications added yet</p>
                    <Link href={routes.RECRUITMENT_RESUME_OTHER_CERTS} className=" hover:underline">Click edit/here to add certifications</Link>
                  </div>
                )}
              </Section>
            </div>

            <div className="">
              <Section title="PORTFOLIO & CONTACT" editable={true} editLink={routes.RECRUITMENT_CONTACT}>
               {data.contact_details.name && <ContactItem icon="📧" text={data.contact_details.name} />}
               {data.contact_details.socials.map((social)=>(
                 <ContactItem key={social.optionUrl} icon="🔗" text={social.optionUrl} />
                ))}
               {data.contact_details.phone && <ContactItem icon="📞" text={data.contact_details.phone} />}
               
               {!data.contact_details.name && (
                 <ContactItem icon="📧" text="No name added yet" />
               )}

               {data.contact_details.socials.length === 0 && 
                 <ContactItem icon="🔗" text="No social links added yet" />
               }

               {!data.contact_details.phone && ( 
                 <ContactItem icon="📞" text="No phone number added yet" />
               )}
              </Section>

              <Section title="SKILLS" editable={true} editLink={routes.RECRUITMENT_OTHERS}>
                {data.others.skills.map((skill)=>(
                  <SkillItem key={skill} text={skill} />
                  
                ))}
                {data.others.skills.length === 0 && (
                  <div className="flex flex-col items-center justify-center py-8 text-gray-500">
                    <p className="text-lg text-secondary-500">No skills added yet</p>
                    <Link href={routes.RECRUITMENT_OTHERS} className="hover:underline">Click here to add your skills</Link>
                  </div>
                )}
              </Section>
              <Section title="EDUCATION" editable={true} editLink={routes.RECRUITMENT_EDUCATION +'/more'}>
                {data.education.map((education)=>(
                  <EducationItem
                    key={education._id}
                    degree={education.degree}
                    school={education.school}
                    date={education.start_date + ' - ' + (education.end_date === ''?'Present':education.end_date)}
                  />
                ))}
                {data.education.length === 0 && (
                  <div className="flex flex-col items-center justify-center py-8 text-gray-500">
                    <p className="text-lg text-secondary-500">No education added yet</p>
                    <Link href={routes.RECRUITMENT_EDUCATION} className="hover:underline">Click here to add your education</Link>
                  </div>
                )}
              </Section>
              <Section title="LANGUAGE" editable={true} editLink={routes.RECRUITMENT_OTHERS}>
                {data.others.languages.map((language)=>(
                  <LanguageItem key={language} text={language} />
                ))}
                {data.others.languages.length === 0 && (
                  <div className="flex flex-col items-center justify-center py-8 text-gray-500">
                    <p className="text-lg text-secondary-500">No languages added yet</p>
                    <Link href={routes.RECRUITMENT_OTHERS} className="hover:underline">Click here to add your languages</Link>
                  </div>
                )}  
              </Section>
              <Section title="HOBBIES" editable={true} editLink={routes.RECRUITMENT_OTHERS}>
                {data.others.hobby.map((hobby)=>(
                  <HobbyItem key={hobby} text={hobby} />
                ))}
                {data.others.hobby.length === 0 && (
                  <div className="flex flex-col items-center justify-center py-8 text-gray-500">
                    <p className="text-lg text-secondary-500">No hobbies added yet</p>
                    <Link href={routes.RECRUITMENT_OTHERS} className="hover:underline">Click here to add your hobbies</Link>
                  </div>
                )}
              </Section>
              <Section title="REFERENCE" editable={true} editLink={routes.RECRUITMENT_REF}>
                {data.reference && 
                  <ReferenceItem
                    name={data.reference.name}
                    email={data.reference.email}
                    phone={data.reference.phone}
                  />
                }
                {!data.reference && (
                  <div className="flex flex-col items-center justify-center py-8 text-gray-500">
                    <p className="text-lg text-secondary-500">No references added yet</p>
                    <Link href={routes.RECRUITMENT_REF} className="hover:underline">Click here to add your references</Link>
                  </div>
                )}
              </Section>
            </div>
          </div>
          <Section title="COVER LETTER" editable={true} editLink={routes.RECRUITMENT_COVER_LETTER}>
            <p className="text-gray-600">
             {data.coverletter}
            </p>
            {!data.coverletter && (
              <span className="flex w-full flex-col items-center justify-center py-8 text-gray-500">
                <p className="text-lg text-secondary-500">No cover letter added yet</p>
                <Link href={routes.RECRUITMENT_COVER_LETTER} className="hover:underline">Click here to add your cover letter</Link>
              </span>
            )}
          </Section>
          <Section title="CV" editable={true} editLink={routes.RECRUITMENT_PROFILE_PICTURE}>
            <div className="rounded bg-red-100 p-4">
              <Image src={data.upload.cv} alt="CV" width={400} height={400} />
            </div>
            {!data.upload.cv && (
              <span className="flex w-full flex-col items-center justify-center py-8 text-gray-500">
                <p className="text-lg text-secondary-500">No CV added yet</p>
                <Link href={routes.RECRUITMENT_PROFILE_PICTURE} className="hover:underline">Click here to add your CV</Link>
              </span>
            )}
          </Section>
        </div>
      </div>}
    </div>
  
}

function ResumeViewclient({ resume, session }: { resume: UserResumeResponse, session: Session    }) {

  return (
    
        <ResumeView resume={resume} session={session} />
  );
}

export default ResumeViewclient;