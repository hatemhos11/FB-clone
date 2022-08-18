import InputBox from "./InputBox/InputBox"
import Posts from "./Posts/Posts"
import Stories from "./Stories/Stories"

const Feed = () => {
  return (
    <div className="w-full md:w-2/3 lg:w-1/2 min-w-[380px] overflow-y-auto scrollbar-hide py-10 sm:px-4  " style={{height: 'calc(100vh - 59px )'}}>
      {/* TODO STORIES */}
      <Stories/>
      
      {/* TODO INPUT BOX  */}
      <InputBox />
      
      {/* TODO POSTS */}
      <Posts/>

    </div>
  )
}

export default Feed