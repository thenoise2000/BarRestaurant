import React from "react";
import "./tabOptions.css";

const tabs = [
     {
    id: 1,
    name: "Delivery",
    active_img: "https://enmotovoychile.cl/wp-content/uploads/2020/07/delivery-en-moto.gif",
    backdrop: "#FCEEC0",
    inactive_img: "https://enmotovoychile.cl/wp-content/uploads/2020/07/Delivery.gif",
  },
  {
    id: 2,
    name: "Dining Out",
    active_img:"https://mir-s3-cdn-cf.behance.net/project_modules/disp/0845c232253239.56766f2d063c9.gif",
    backdrop: "#E5F3F3",
    inactive_img:"https://i.pinimg.com/originals/8a/b7/c9/8ab7c931cf9637543eb21c4cf58b8e8d.gif",
  },
  {
    id: 3,
    name: "Nightlife",
    active_img: "https://c.tenor.com/-YI596kzHIUAAAAC/open-neon.gif",
    backdrop: "#EDf4FF",
    inactive_img: "https://prodimages.everythingneon.com/350/l102-0944-bar-animated-led-sign.gif",
  },

];

const TabOptions = ({ activeTab, setActiveTab }) => {
    return (
        <div className="tab-options">
            <div className="options-wrapper max-width">
                {tabs.map((tab) => (
                    <div className={`tab-item absolute-center cur-po ${ activeTab === tab.name && "active-tab"}`} onClick={() => setActiveTab(tab.name)}>
                        <div className="tab-image-container absolute-center"
                            style={{backgroundColor: `${activeTab === tab.name ? tab.backdrop : ""}`,}}>
                            <img src={activeTab === tab.name ? tab.active_img : tab.inactive_img}
                            className="tab-image" alt={tab.name}/>
                        </div>
                        <div className="tab-name letter3">{tab.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TabOptions;