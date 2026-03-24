import githubData from '../../assets/github.json'
import Mainwindow from './Mainwindow.jsx'

const GiftCard=({ data = { id: 1, image: "", title: "", description: "", tags: [], repoLink: "", demoLink: "" } })=>{

  return <div className="card bg-white/50 flex flex-col justify-between gap-2 flex-1 p-3 basis-52 max-w-[16rem] rounded-md">
   <img src={data.image} alt="" className='img rounded w-full'/>
       
        <h1 className='text-xl font-medium leading-5'>{data.title}</h1>
        <p className='description opacity-70 text-[14px]' >{data.description}</p>

        <div className="tags flex flex-wrap gap-2">
            {
                data.tags.map(tag => <p className='tag bg-green-100/10 text-[13px] w-fit p-1 rounded-md' >{tag}</p>)
            }
        </div>

        <div className="urls text-[14px] flex items-center justify-between">
            <a href={data.repoLink} target="_blank">Repository</a>
            {data.demoLink && <a href={data.demoLink} target="_blank" >Demo link</a>}
            
        </div>
    </div>
}
const Github = ({ windowName, setWindowsState }) => {
  return (
    <Mainwindow   windowName={windowName} setWindowsState={setWindowsState} >
      <div className="h-full w-full flex p-1 pb-6 flex-wrap gap-5 justify-center overflow-auto ">
        {githubData.map(project => (
          <GiftCard key={project.id} data={project} />
        ))}
      </div>
    </Mainwindow>
  )
}

export default Github