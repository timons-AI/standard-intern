import React from 'react'
import { db } from '@/lib/db'
import { clear } from 'console'
import { get } from 'http'


/// This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
// model companies {
//     company_id          Int                   @id(map: "pk_companies") @default(autoincrement())
//     name                String                @db.VarChar(100)
//     description         String?
//     address             String?               @db.VarChar(100)
//     contact             String?               @db.VarChar
//     company_professions company_professions[]
//     company_regions     company_regions[]
//   }
  
 async function getRegions(company_id: number){
    const regions = await db.company_regions.findMany({
        where: {company_id: company_id},
        include: {regions: true}
    })
    return regions
}

 async function getCompanies(){
    const companies = await db.companies.findMany(
        {include: {
            company_regions: {
                include: {regions: true}
            } ,
            company_professions: {
                include: {professions: true}
            }
        },
        orderBy: {name: 'asc'}
    }
    )
    
    
    return companies
}

 async function getCompany(company_id: number){
    const company = await db.companies.findUnique({
        where: {company_id: company_id},
        include: {
            company_regions: {
                include: {regions: true}
            } ,
            company_professions: {
                include: {professions: true}
            }
        }

    })
    return company
}

export default async function page(){
    const companies = await getCompanies()
    // const regions = await getRegions(60)
    const company = await getCompany(60)
    console.log(company?.company_regions)
    
    return(
        <div className=' border m-2 p-2'>
            {/* <h1 className='text-2xl'>Regions</h1>
            <ul className=''>
                {regions.map((region) => (
                    <li key={region.region_id} className='border m-2 p-2'>
                        <h2>{region.name}</h2>
                        <p>{region.region_id}</p>
                    </li>
                ))}
            </ul> */}

            <h1 className='text-2xl'>Companies</h1>
            <ul className=''>
                {companies.map((company) => (
                    <li key={company.company_id} className='border m-2 p-2'>
                        <div className=' border border-neutral-800 border-dashed p-2'>
                            <h2>{company.name}</h2>
                            <p>{company.company_id}</p>
                            <p>{company.description}</p>
                            <p>{company.address}</p>
                            <p>{company.contact}</p>
                        </div>
                        <div className=' p-2'>
                        <p className='text-xl font-light'>{company.company_regions.map((region) => (
                            <span key={region.region_id}>{region.regions.name}</span>
                        ))}</p>
                        <p className='text-sm  font-semibold rounded-full w-fit p-1 px-2 bg-neutral-800 text-white'>{company.company_professions.map((profession) => (
                            <span key={profession.profession_id}>{profession.professions.name}</span>
                        ))}</p>
                        </div>
                        
                    </li>
                ))}
            </ul>
        </div>
    )
}