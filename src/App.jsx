import CardImg1 from "./images/img1.png";
import CardImg2 from "./images/img2.png";


import {
  Logo,
  HomeIcon,
  Discount,
  Graph,
  Message,
  Notification,
  Settings,
  Logout,
  Filter,
  Edit,
} from "./components/imges";

import {
  HeartIcon,
  RestaurantIcon,
  DiscountIcon,
  NotificationIcon,
  SecurityIcon,
  InfoIcon,
} from "./components/icons";

const App = () => {
  return (
    <div className="flex min-h-screen min-w-full gap-[24px] bg-[#252836]">
      <aside className="min-w-[110px] rounded-2xl bg-[#1F1D2B] p-[24px]">
        <button className="aside__header mb-[20px] h-[56px] w-[56px] rounded-xl bg-[#553C3B] p-[8px]">
          <Logo />
        </button>
        <button className="mb-[20px] block w-full  rounded-xl hover:cursor-pointer hover:bg-[#553C3B]">
          <p className="h-[56px] w-[56px] p-[16px]">
            <HomeIcon />
          </p>
        </button>
        <button className="mb-[20px] block w-full  rounded-xl hover:cursor-pointer hover:bg-[#553C3B]">
          <p className="h-[56px] w-[56px] p-[16px]">
            <Discount />
          </p>
        </button>
        <button className="mb-[20px] block w-full  rounded-xl hover:cursor-pointer hover:bg-[#553C3B]">
          <p className="h-[56px] w-[56px] p-[16px]">
            <Graph />
          </p>
        </button>
        <button className="mb-[20px] block w-full  rounded-xl hover:cursor-pointer hover:bg-[#553C3B]">
          <p className="h-[56px] w-[56px] p-[16px]">
            <Message />
          </p>
        </button>
        <button className="mb-[20px] block w-full  rounded-xl hover:cursor-pointer hover:bg-[#553C3B]">
          <p className="h-[66px] w-[66px] p-[16px]">
            <Notification />
          </p>
        </button>
        <button className="mb-[20px] block w-full  rounded-xl hover:cursor-pointer hover:bg-[#553C3B]">
          <p className="h-[56px] w-[56px] p-[16px]">
            <Settings />
          </p>
        </button>
        <button className="mb-[20px] block w-full  rounded-xl hover:cursor-pointer hover:bg-[#553C3B]">
          <p className="h-[56px] w-[56px] p-[16px]">
            <Logout />
          </p>
        </button>
      </aside>
      <div>
        <header className="my-[24px] font-sans text-5xl font-semibold text-white">
          Settings
        </header>
        <main className="flex gap-[24px]">
          <div className="main__left h-[670px] w-[330px] rounded-[8px] bg-[#1F1D2B]">
            <div className="flex w-full cursor-pointer p-[24px] hover:bg-[#54353B]">
              <span className="mt-[2px mr-[8px]">
                <HeartIcon />
              </span>
              <div>
                <p className="text-sm font-medium  text-white">Appereance</p>
                <p className="text-sm text-[#ABBBC2]">
                  Dark and Light mode, Font size
                </p>
              </div>
            </div>
            <div className="flex w-full cursor-pointer p-[24px] hover:bg-[#54353B]">
              <span className="mr-[8px] mt-[2px]">
                <RestaurantIcon />
              </span>
              <div>
                <p className="text-sm font-medium  text-white">
                  Your Restaurant
                </p>
                <p className="text-sm text-[#ABBBC2]">
                  Dark and Light mode, Font size
                </p>
              </div>
            </div>
            <div className="flex w-full cursor-pointer p-[24px] hover:bg-[#54353B]">
              <span className="mr-[8px] mt-[2px]">
                <DiscountIcon />
              </span>
              <div>
                <p className="text-sm font-medium  text-white">
                  Products Management
                </p>
                <p className="text-sm text-[#ABBBC2]">
                  Manage your product, pricing, etc
                </p>
              </div>
            </div>
            <div className="flex w-full cursor-pointer p-[24px] hover:bg-[#54353B]">
              <span className="mr-[8px] mt-[2px]">
                <NotificationIcon />
              </span>
              <div>
                <p className="text-sm font-medium  text-white">Notifications</p>
                <p className="text-sm text-[#ABBBC2]">
                  Customize your notifications
                </p>
              </div>
            </div>
            <div className="flex w-full cursor-pointer p-[24px] hover:bg-[#54353B]">
              <span className="mr-[8px] mt-[2px]">
                <SecurityIcon />
              </span>
              <div>
                <p className="text-sm font-medium  text-white">Security</p>
                <p className="text-sm text-[#ABBBC2]">
                  Configure Password, PIN, etc
                </p>
              </div>
            </div>
            <div className="flex w-full cursor-pointer p-[24px] hover:bg-[#54353B]">
              <span className="mr-[8px] mt-[2px]">
                <SecurityIcon />
              </span>
              <div>
                <p className="text-sm font-medium  text-white">Security</p>
                <p className="text-sm text-[#ABBBC2]">
                  Configure Password, PIN, etc
                </p>
              </div>
            </div>
            <div className="flex w-full cursor-pointer p-[24px] hover:bg-[#54353B]">
              <span className="mr-[8px] mt-[2px]">
                <InfoIcon />
              </span>
              <div>
                <p className="text-sm font-medium  text-white">About Us</p>
                <p className="text-sm text-[#ABBBC2]">
                  Find out more about Posly
                </p>
              </div>
            </div>
          </div>
          <div className="main__right w-[900px] rounded-[10px] bg-[#1F1D2B]">
            <header className="flex items-center justify-between p-[24px]">
              <h1 className="text-xl text-white">Products Management</h1>
              <div className=" flex items-center gap-[10px] rounded-[8px]  border-[1px] border-solid border-[#393C49] p-[14px]">
                <Filter />
                <p className="text-sm text-white">Manage Categories</p>
              </div>
            </header>

            <nav className="pb-[13px] pl-[24px] pr-[24px]">
              <ul className="flex gap-[24px]">
                <li className="cursor-pointer text-white hover:text-[red]">
                  Hot Dishes
                </li>
                <li className="cursor-pointer text-white hover:text-[red]">
                  Cold Dishes
                </li>
                <li className="cursor-pointer text-white hover:text-[red]">
                  Soup
                </li>
                <li className="cursor-pointer text-white hover:text-[red]">
                  Grill
                </li>
                <li className="cursor-pointer text-white hover:text-[red]">
                  Appetizer
                </li>
                <li className="cursor-pointer text-white hover:text-[red]">
                  Dessert
                </li>
              </ul>
            </nav>

            <div className="h-[1px] w-full bg-[#393C49]"></div>

            <div className=" grid  h-[400px] grid-cols-3 overflow-y-scroll p-[24px]">
              <div className="mb-[20px] h-[300px] w-[220px] rounded-[10px] border-[3px] border-dashed border-[#EA7C69]">
                <p className="mt-[80px] text-center text-[40px] text-[#EA7C69]">
                  +
                </p>
                <p className="text-center text-xl text-[#EA7C69]">
                  Add new dish
                </p>
              </div>
              <div className="mb-[15px] h-[304px] w-[220px] rounded-[10px] border-[3px] border-solid border-[#393C49]" >
                <img
                  src={CardImg1}
                  alt="img"
                  className="mx-auto mb-[15px] mt-[15px] block"
                />
                <p className="mx-auto mb-[8px] w-[140px] text-center text-sm text-white">
                  Spicy seasoned seafood noodles
                </p>
                <div className="mb-[21.5px]  ml-[53px] flex gap-[8px]">
                  <p className="text-sm text-[#ABBBC5]">$ 2.29</p>
                  <p className="text-sm text-[#ABBBC5]">20 Bowls</p>
                </div>
                <button className="flex w-full items-center justify-center rounded-bl-lg  bg-[#50343A]">
                  <Edit />
                  <p className="p-[16px] text-sm text-[#EA7C69]">Edit dish</p>
                </button>
              </div>
              <div className="mb-[15px] h-[309px] w-[220px] rounded-[10px] border-[3px] border-solid border-[#393C49]">
                <img
                  src={CardImg2}
                  alt="img"
                  className="mx-auto mb-[15px] mt-[15px] block"
                />
                <p className="mx-auto mb-[8px] w-[140px] text-center text-sm text-white">
                Salted Pasta with mushroom sauce
                </p>
                <div className="mb-[21.5px]  ml-[53px] flex gap-[8px]">
                  <p className="text-sm text-[#ABBBC5]">$ 2.69</p>
                  <p className="text-sm text-[#ABBBC5]">30 Bowls</p>
                </div>
                <button className="flex w-full items-center justify-center rounded-bl-lg bg-[#50343A]">
                  <Edit />
                  <p className="p-[16px] text-sm text-[#EA7C69]">Edit dish</p>
                </button>
              </div>
              <div className="  h-[304px] w-[220px] rounded-[10px] border-[3px] border-solid border-[#393C49]">
                <img
                  src={CardImg1}
                  alt="img"
                  className="mx-auto mb-[15px] mt-[15px] block"
                />
                <p className="mx-auto mb-[8px] w-[140px] text-center text-sm text-white">
                  Spicy seasoned seafood noodles
                </p>
                <div className="mb-[21.5px]  ml-[53px] flex gap-[8px]">
                  <p className="text-sm text-[#ABBBC5]">$ 2.29</p>
                  <p className="text-sm text-[#ABBBC5]">20 Bowls</p>
                </div>
                <button className="flex w-full items-center justify-center rounded-bl-lg bg-[#50343A]">
                  <Edit />
                  <p className="p-[16px] text-sm text-[#EA7C69]">Edit dish</p>
                </button>
              </div>
              <div className="  h-[309px] w-[220px] rounded-[10px] border-[3px] border-solid border-[#393C49]">
                <img
                  src={CardImg2}
                  alt="img"
                  className="mx-auto mb-[15px] mt-[15px] block"
                />
                <p className="mx-auto mb-[8px] w-[140px] text-center text-sm text-white">
                Salted Pasta with mushroom sauce
                </p>
                <div className="mb-[21.5px]  ml-[53px] flex gap-[8px]">
                  <p className="text-sm text-[#ABBBC5]">$ 2.69</p>
                  <p className="text-sm text-[#ABBBC5]">30 Bowls</p>
                </div>
                <button className="flex w-full items-center justify-center rounded-bl-lg  bg-[#50343A]">
                  <Edit />
                  <p className="p-[16px] text-sm text-[#EA7C69]">Edit dish</p>
                </button>
              </div>
              <div className="  h-[304px] w-[220px] rounded-[10px] border-[3px] border-solid border-[#393C49]">
                <img
                  src={CardImg1}
                  alt="img"
                  className="mx-auto mb-[15px] mt-[15px] block"
                />
                <p className="mx-auto mb-[8px] w-[140px] text-center text-sm text-white">
                  Spicy seasoned seafood noodles
                </p>
                <div className="mb-[21.5px]  ml-[53px] flex gap-[8px]">
                  <p className="text-sm text-[#ABBBC5]">$ 2.29</p>
                  <p className="text-sm text-[#ABBBC5]">20 Bowls</p>
                </div>
                <button className="flex w-full items-center justify-center rounded-bl-lg  bg-[#50343A]">
                  <Edit />
                  <p className="p-[16px] text-sm text-[#EA7C69]">Edit dish</p>
                </button>
              </div>
              <div className=" mt-5 h-[309px] w-[220px] rounded-[10px] border-[3px] border-solid border-[#393C49]">
                <img
                  src={CardImg2}
                  alt="img"
                  className="mx-auto mb-[15px] mt-[15px] block"
                />
                <p className="mx-auto mb-[8px] w-[140px] text-center text-sm text-white">
                Salted Pasta with mushroom sauce
                </p>
                <div className="mb-[21.5px]  ml-[53px] flex gap-[8px]">
                  <p className="text-sm text-[#ABBBC5]">$ 2.69</p>
                  <p className="text-sm text-[#ABBBC5]">30 Bowls</p>
                </div>
                <button className="flex w-full items-center justify-center rounded-bl-lg bg-[#50343A]">
                  <Edit />
                  <p className="p-[16px] text-sm text-[#EA7C69]">Edit dish</p>
                </button>
              </div>
              <div className="mt-5 h-[304px] w-[220px] rounded-[10px] border-[3px] border-solid border-[#393C49]">
                <img
                  src={CardImg1}
                  alt="img"
                  className="mx-auto mb-[15px] mt-[15px] block"
                />
                <p className="mx-auto mb-[8px] w-[140px] text-center text-sm text-white">
                  Spicy seasoned seafood noodles
                </p>
                <div className="mb-[21.5px]  ml-[53px] flex gap-[8px]">
                  <p className="text-sm text-[#ABBBC5]">$ 2.29</p>
                  <p className="text-sm text-[#ABBBC5]">20 Bowls</p>
                </div>
                <button className="flex w-full items-center justify-center rounded-bl-lg  bg-[#50343A]">
                  <Edit />
                  <p className="p-[16px] text-sm text-[#EA7C69]">Edit dish</p>
                </button>
              </div>
              <div className=" mt-5 h-[309px] w-[220px] rounded-[10px] border-[3px] border-solid border-[#393C49]">
                <img
                  src={CardImg2}
                  alt="img"
                  className="mx-auto mb-[15px] mt-[15px] block"
                />
                <p className="mx-auto mb-[8px] w-[140px] text-center text-sm text-white">
                Salted Pasta with mushroom sauce
                </p>
                <div className="mb-[21.5px]  ml-[53px] flex gap-[8px]">
                  <p className="text-sm text-[#ABBBC5]">$ 2.69</p>
                  <p className="text-sm text-[#ABBBC5]">30 Bowls</p>
                </div>
                <button className="flex w-full items-center justify-center rounded-bl-lg bg-[#50343A] ">
                  <Edit />
                  <p className="p-[16px] text-sm text-[#EA7C69]">Edit dish</p>
                </button>
              </div>
            </div>
            

            <div className="mt-[40px] flex gap-[15px]">
              <button className="ml-[24px] w-[192px] cursor-pointer rounded-[10px] border-[2px] border-solid border-[#EA7C69] p-[10px] text-[#EA7C69] hover:bg-[#EA7C69] hover:text-white">
                Discard Changes
              </button>
              <button className="ml-[34px] w-[192px] cursor-pointer rounded-[10px] border-[2px] border-solid border-[#EA7C69] p-[10px] text-[#EA7C69] hover:bg-[#EA7C69] hover:text-white">
                Save Changes
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
