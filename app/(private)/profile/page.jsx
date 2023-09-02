import ProfileList from "./ProfileList"



export const metadata = {
    title: 'Profile', 
    description:'This is your profile page'
}
const ProfilePage = () => {
  return (
    <div className="flex items-center justify-center pt-40">
        <div className="flex flex-col">
            <h1 className="text-3xl md:text-5xl text-white text-center"> Who's watching?</h1>
            <ProfileList/>
        </div>

    </div>
  )
}

export default ProfilePage