import React from 'react'
import Card from './components/Card'

const App = () => {

  const jobOpenings =  [
  {
    "brandLogo": "https://imgs.search.brave.com/V7sgagRATLlWoAL9kKkWlvM1Lymxxb-2sk6dz3LnYrk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2MxL0dvb2dsZV8l/MjJHJTIyX2xvZ28u/c3Zn",
    "companyName": "Google",
    "datePosted": "5 days ago",
    "post": "Software Engineer",
    "tag1": "Full Time",
    "tag2": "Junior Level",
    "pay": "$45/hr",
    "location": "Mumbai, India"
  },
  {
    "brandLogo": "https://imgs.search.brave.com/rsTE9niKLWvzC9t5MkypHmZaggp8E_w_8CWppIhkpEM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdm/cmUuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9hcHBsZS1sb2dv/LTU1LTMwMHgzMDAu/cG5n",
    "companyName": "Apple",
    "datePosted": "2 weeks ago",
    "post": "iOS Developer",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay": "$55/hr",
    "location": "Bangalore, India"
  },
  {
    "brandLogo": "https://imgs.search.brave.com/1JaAtJDZwNbiQFJz7jQVTRirDIkji7jd1Uup9FhkJUU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMS8x/Mi8xMy8wNS80NC9t/ZXRhLTY4Njc2MjNf/NjQwLnBuZw",
    "companyName": "Meta",
    "datePosted": "10 days ago",
    "post": "Frontend Engineer",
    "tag1": "Full Time",
    "tag2": "Junior Level",
    "pay": "$50/hr",
    "location": "Hyderabad, India"
  },
  {
    "brandLogo": "https://imgs.search.brave.com/98dRkyZ1zeADFpvad5k21xmSSuHXk_AS3K8aLxVI7Cw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC8z/OS84Ny9hbWF6b24t/aWNvbi1ibGFjay1h/bmQtd2hpdGUtdmVj/dG9yLTM0MjQzOTg3/LmpwZw",
    "companyName": "Amazon",
    "datePosted": "3 weeks ago",
    "post": "Backend Developer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$60/hr",
    "location": "Chennai, India"
  },
  {
    "brandLogo": "https://imgs.search.brave.com/ooxXqITHt4SVhBVlRBD0fBCKeyKEma7-cgG4eGWmV88/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjAv/MTkwLzY5OC9zbWFs/bC9uZXRmbGl4LWxv/Z28tbmV0ZmxpeC1p/Y29uLWZyZWUtZnJl/ZS12ZWN0b3IuanBn",
    "companyName": "Netflix",
    "datePosted": "1 week ago",
    "post": "Data Engineer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$70/hr",
    "location": "Remote"
  },
  {
    "brandLogo": "https://imgs.search.brave.com/yQDQt2FkloIYigzwri4CYYiD4pIZHbJdHEt0-B0gDWo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDYv/ODkyLzY4Mi9zbWFs/bC9taWNyb3NvZnQt/bG9nby1pY29uLWVk/aXRvcmlhbC1mcmVl/LXZlY3Rvci5qcGc",
    "companyName": "Microsoft",
    "datePosted": "4 days ago",
    "post": "Cloud Engineer",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay": "$58/hr",
    "location": "Noida, India"
  },
  {
    "brandLogo": "https://imgs.search.brave.com/H9PI8LHzhGQYsqjBnKhHPhZYI1KgaXJyb6xQlgdvges/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2IyLzE2/LzJlL2IyMTYyZTMz/NWVhMGRjMTAxYzBk/ZWZjMjg4YjVhYzY3/LmpwZw",
    "companyName": "Tesla",
    "datePosted": "6 days ago",
    "post": "Embedded Systems Engineer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$65/hr",
    "location": "Pune, India"
  },
  {
    "brandLogo": "https://imgs.search.brave.com/szwVYyj9nIXppAwe7H1Zy1A6DC2hAI6AaL4AIHcvVSA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEw/L0Fkb2JlLUxvZ28t/MTk5My01MDB4MzQ0/LmpwZw",
    "companyName": "Adobe",
    "datePosted": "2 days ago",
    "post": "UI/UX Designer",
    "tag1": "Part Time",
    "tag2": "Mid Level",
    "pay": "$40/hr",
    "location": "Delhi, India"
  },
  {
    "brandLogo": "https://imgs.search.brave.com/eb3CobyllaiU0M-frgjUnlLSRZud4T2A4H-bVBjatKM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMudHVyYm9sb2dv/LmNvbS9ibG9nL2Vu/LzIwMTkvMTIvMTkw/ODQ4MDQvVWJlci1s/b2dvLnBuZw",
    "companyName": "Uber",
    "datePosted": "8 days ago",
    "post": "Mobile App Developer",
    "tag1": "Full Time",
    "tag2": "Junior Level",
    "pay": "$48/hr",
    "location": "Bangalore, India"
  },
  {
    "brandLogo": "https://imgs.search.brave.com/hNyWX8gVGlfS_fIvnFfSNfg-x0Ye9EaSvbehrI1W4Cg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzI4LzIvYWlyYm5i/LWxvZ28tcG5nX3Nl/ZWtsb2dvLTI4NDkw/Ny5wbmc",
    "companyName": "Airbnb",
    "datePosted": "9 days ago",
    "post": "DevOps Engineer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$62/hr",
    "location": "Remote"
  }
]


  return (
    <div className='parent'>
      {jobOpenings.map(function(elem,idx){

        return <div key={idx}>
          <Card brandLogo={elem.brandLogo} company={elem.companyName} post={elem.post} datePosted={elem.datePosted} pay={elem.pay} location={elem.location} tag1={elem.tag1} tag2={elem.tag2} />
        </div>
      })}        
    </div>
  )
}

export default App