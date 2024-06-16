import React, { useState } from "react";
import LeftSection from "./Admin/AdminLeft";
import RightSection from "./Admin/AdminRight";
const Admin = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <div className="flex justify-center items-center">
      <div className="flex px-5 gap-10 pt-24 min-h-screen">
        <div className="w-[390px] ">
          <LeftSection
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          ></LeftSection>
        </div>
        <div className="w-[790px]">
          <RightSection selectedItem={selectedItem}></RightSection>
        </div>
      </div>
    </div>
  );
};

export default Admin;
