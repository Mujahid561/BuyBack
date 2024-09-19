import { MdManageAccounts } from "react-icons/md";
import { GiWallet } from "react-icons/gi";
import { MdFolderShared } from "react-icons/md";
export const data = [
  {
    header: "ACCOUNT SETTINGS",
    items: [
      { title: "Profile information", path: "/my-account/myProfile" },
      { title: "Manage Addresses", path: "/my-account/savedUPI" },
      { title: "Pan Card Information", path: "/my-account/savedUPI" },
    ],
    logo:MdManageAccounts
  },
  {
    header: "PAYMENTS",
    items: [
      { title: "Gift Cards", path: "/my-account/savedUPI" },
      { title: "Saved UPI", path: "/my-account/savedUPI" },
      { title: "Saved Cards", path: "/my-account/savedUPI" },
    ],
    logo:GiWallet
  },
  {
    header: "MY STUFF",
    items: [
      { title: "My Coupons", path: "/my-account/savedUPI" },
      { title: "My Reviews & Ratings", path: "/my-account/savedUPI" },
      { title: "All Notification", path: "/my-account/savedUPI" },
      { title: "My Wishlist", path: "/my-account/savedUPI" },
    ],
    logo:MdFolderShared
  },
];
