import CenterHead from "./CenterHead"
import RightHead from "./RightHead"
import LeftHead from "./LeftHead"

const Header = () => {
  return (
    <div className="shadow-sm bg-white sticky top-0 z-20">
      <div className="flex items-center flex-nowrap justify-between py-1 mx-4">

      {/* ==================== LEFT =====================*/} 
        <LeftHead />

      {/* ==================== CETNER ===================== */}
        <CenterHead />

      {/* ==================== RIGHT ===================== */}
        <RightHead />

      </div>
    </div>
  )
}

export default Header