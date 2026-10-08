//first component - import
import Counter from './Counter.jsx'
import LikeButton from './LikeButton.jsx'
import SubjectList from './SubjectList.jsx'

//2nd comp - declare variable
const subjects = [
  { code: 'BICS 3301', name: 'Cross-Platform Software Development' },
  { code: 'BICS 2305', name: 'Operating Systems' },
  { code: 'BICS 2306', name: 'Software Engineering' }
]

//br - break @ next line
//LikeButton have prop (argument)
function App() {
  return (
    <>
    <h1>Week 2 Code-Along</h1>
    <h2>Designed by Faizul</h2><br /> 
    <Counter />
    <div className="box">
      <LikeButton label="React" /><br /> 
      <LikeButton label="Firebase" /><br />
      <LikeButton label="PWA" /><br />
      <LikeButton label="PWA" />
    </div>
    <SubjectList subjects={subjects} />
    </>
  )
}

export default App