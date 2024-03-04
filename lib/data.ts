import {
  Bot,
  LayoutDashboard,
  LogOut,
  NotebookPen,
  Settings,
  Users,
} from "lucide-react";
import React from "react";

import { SiOpenai, SiWolfram } from "react-icons/si";

export const links = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: React.createElement(LayoutDashboard),
  },
  {
    path: "/chat",
    name: "Chat",
    icon: React.createElement(Bot),
  },
] as const;

export const userOptions = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: React.createElement(LayoutDashboard),
  },
  {
    path: "/chat",
    name: "Chat",
    icon: React.createElement(Bot),
  },
  {
    path: "/note",
    name: "Note",
    icon: React.createElement(NotebookPen),
  },
  {
    path: "/settings",
    name: "Settings",
    icon: React.createElement(Settings),
  },

  {
    path: "/api/auth/logout",
    name: "Logout",
    icon: React.createElement(LogOut),
  },
] as const;

export const ulVariants = {
  hidden: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const liVariants = {
  hidden: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

export const repaths = [
  {
    id: "path1",
    path: "M0 0H10.6254L24.8549 38.5455H25.4166L39.6462 0H50.2715V53.1948H41.9398V16.6494H41.4951L28.2485 53.039H22.0231L8.77645 16.5714H8.33178V53.1948H0V0Z",
    stroke: "#FFF",
  },
  {
    id: "path2",
    path: "M69.6967 54C67.4188 54 65.367 53.5498 63.5415 52.6493C61.7316 51.7316 60.2962 50.381 59.2352 48.5974C58.1898 46.8139 57.6672 44.6147 57.6672 42C57.6672 39.7489 58.0416 37.8874 58.7905 36.4156C59.5395 34.9437 60.5614 33.7662 61.8564 32.8831C63.1515 32 64.6103 31.3333 66.233 30.8831C67.8712 30.4156 69.5641 30.0779 71.3116 29.8701C73.418 29.6277 75.1264 29.4113 76.4371 29.2208C77.7477 29.013 78.6994 28.7013 79.2923 28.2857C79.9008 27.8528 80.2051 27.1861 80.2051 26.2857V26.1299C80.2051 24.1732 79.6824 22.658 78.637 21.5844C77.5917 20.5108 76.086 19.974 74.1201 19.974C72.0449 19.974 70.3989 20.4762 69.1819 21.4805C67.9805 22.4848 67.1691 23.671 66.7479 25.039L58.8373 23.7922C59.4614 21.368 60.4912 19.342 61.9267 17.7143C63.3621 16.0693 65.1174 14.8398 67.1925 14.026C69.2677 13.1948 71.5613 12.7792 74.0733 12.7792C75.8052 12.7792 77.5292 13.0043 79.2455 13.4545C80.9618 13.9048 82.5299 14.6494 83.9497 15.6883C85.3695 16.71 86.5085 18.1039 87.3667 19.8701C88.2404 21.6364 88.6773 23.8442 88.6773 26.4935V53.1948H80.5327V47.7143H80.2519C79.737 48.8225 79.0115 49.8615 78.0753 50.8312C77.1548 51.7836 75.9924 52.5541 74.5882 53.1429C73.1995 53.7143 71.5691 54 69.6967 54ZM71.8967 47.0909C73.5974 47.0909 75.0718 46.7186 76.32 45.974C77.5683 45.2121 78.5278 44.2078 79.1987 42.961C79.8852 41.7143 80.2285 40.355 80.2285 38.8831V34.1818C79.9632 34.4242 79.5108 34.6494 78.8711 34.8571C78.247 35.0649 77.5448 35.2468 76.7647 35.4026C75.9846 35.5584 75.2123 35.697 74.4477 35.8182C73.6832 35.9394 73.0201 36.0433 72.4584 36.1299C71.1946 36.3203 70.0634 36.632 69.0648 37.0649C68.0663 37.4978 67.2783 38.1039 66.701 38.8831C66.1238 39.645 65.8351 40.632 65.8351 41.8442C65.8351 43.5758 66.4046 44.8831 67.5436 45.7662C68.6826 46.6494 70.1336 47.0909 71.8967 47.0909Z",
    stroke: "#FFF",
  },
  {
    id: "path3",
    path: "M115.147 13.2987V20.5714H94.4815V13.2987H115.147ZM99.5835 3.74026H108.056V41.1948C108.056 42.4589 108.227 43.4286 108.571 44.1039C108.929 44.7619 109.398 45.2121 109.975 45.4545C110.552 45.697 111.192 45.8182 111.894 45.8182C112.424 45.8182 112.908 45.7749 113.345 45.6883C113.797 45.6017 114.141 45.5238 114.375 45.4545L115.802 52.8052C115.35 52.9784 114.702 53.1688 113.86 53.3766C113.033 53.5844 112.019 53.7056 110.817 53.7403C108.695 53.8095 106.784 53.4545 105.083 52.6753C103.383 51.8788 102.033 50.6494 101.035 48.987C100.052 47.3247 99.5679 45.2468 99.5835 42.7533V3.74026Z",
    stroke: "#FFF",
  },
  {
    id: "path4",
    path: "M131.477 29.8182V53.1948H123.005V0H131.29V20.0779H131.711C132.554 17.8268 133.857 16.0519 135.62 14.7532C137.398 13.4372 139.661 12.7792 142.407 12.7792C144.903 12.7792 147.08 13.3593 148.936 14.5195C150.793 15.6797 152.229 17.3766 153.243 19.6104C154.273 21.8442 154.787 24.5714 154.787 27.7922V53.1948H146.315V29.2468C146.315 26.5628 145.691 24.4762 144.443 22.987C143.21 21.4805 141.478 20.7273 139.247 20.7273C137.749 20.7273 136.408 21.0909 135.222 21.8182C134.052 22.5281 133.131 23.5584 132.46 24.9091C131.805 26.2597 131.477 27.8961 131.477 29.8182Z",
    stroke: "#FFF",
  },
  {
    id: "path5",
    path: "M180.145 53.1948V0H198.494C201.958 0 204.837 0.60606 207.13 1.81818C209.439 3.01299 211.163 4.64935 212.302 6.72727C213.457 8.8052 214.034 11.1602 214.034 13.7922C214.034 15.9567 213.66 17.8095 212.911 19.3507C212.162 20.8745 211.156 22.1126 209.892 23.0649C208.628 24.0173 207.216 24.7013 205.656 25.1169V25.6364C207.356 25.7403 208.987 26.3203 210.547 27.3766C212.123 28.4156 213.41 29.8874 214.409 31.7922C215.407 33.697 215.907 36 215.907 38.7013C215.907 41.4545 215.306 43.9307 214.105 46.1299C212.903 48.3117 211.093 50.0346 208.675 51.2987C206.256 52.5628 203.214 53.1948 199.547 53.1948H180.145ZM188.828 45.1429H198.166C201.318 45.1429 203.588 44.4762 204.977 43.1429C206.381 41.7922 207.083 40.0606 207.083 37.9481C207.083 36.3723 206.732 34.9524 206.03 33.6883C205.328 32.4069 204.329 31.4026 203.034 30.6753C201.739 29.9307 200.195 29.5584 198.401 29.5584H188.828V45.1429ZM188.828 22.6234H197.418C198.915 22.6234 200.265 22.3203 201.466 21.7143C202.668 21.0909 203.612 20.2165 204.298 19.0909C205 17.9481 205.351 16.5974 205.351 15.039C205.351 12.9784 204.696 11.2814 203.386 9.94805C202.091 8.61472 200.164 7.94805 197.605 7.94805H188.828V22.6234Z",
    stroke: "#FFF",
  },
  {
    id: "path6",
    path: "M233.43 54C231.152 54 229.101 53.5498 227.275 52.6493C225.465 51.7316 224.03 50.381 222.969 48.5974C221.923 46.8139 221.401 44.6147 221.401 42C221.401 39.7489 221.775 37.8874 222.524 36.4156C223.273 34.9437 224.295 33.7662 225.59 32.8831C226.885 32 228.344 31.3333 229.966 30.8831C231.605 30.4156 233.298 30.0779 235.045 29.8701C237.151 29.6277 238.86 29.4113 240.171 29.2208C241.481 29.013 242.433 28.7013 243.026 28.2857C243.634 27.8528 243.939 27.1861 243.939 26.2857V26.1299C243.939 24.1732 243.416 22.658 242.371 21.5844C241.325 20.5108 239.82 19.974 237.854 19.974C235.778 19.974 234.132 20.4762 232.915 21.4805C231.714 22.4848 230.903 23.671 230.481 25.039L222.571 23.7922C223.195 21.368 224.225 19.342 225.66 17.7143C227.096 16.0693 228.851 14.8398 230.926 14.026C233.001 13.1948 235.295 12.7792 237.807 12.7792C239.539 12.7792 241.263 13.0043 242.979 13.4545C244.695 13.9048 246.263 14.6494 247.683 15.6883C249.103 16.71 250.242 18.1039 251.1 19.8701C251.974 21.6364 252.411 23.8442 252.411 26.4935V53.1948H244.266V47.7143H243.985C243.471 48.8225 242.745 49.8615 241.809 50.8312C240.888 51.7836 239.726 52.5541 238.322 53.1429C236.933 53.7143 235.303 54 233.43 54ZM235.63 47.0909C237.331 47.0909 238.805 46.7186 240.054 45.974C241.302 45.2121 242.261 44.2078 242.932 42.961C243.619 41.7143 243.962 40.355 243.962 38.8831V34.1818C243.697 34.4242 243.244 34.6494 242.605 34.8571C241.98 35.0649 241.278 35.2468 240.498 35.4026C239.718 35.5584 238.946 35.697 238.181 35.8182C237.417 35.9394 236.754 36.0433 236.192 36.1299C234.928 36.3203 233.797 36.632 232.798 37.0649C231.8 37.4978 231.012 38.1039 230.435 38.8831C229.857 39.645 229.569 40.632 229.569 41.8442C229.569 43.5758 230.138 44.8831 231.277 45.7662C232.416 46.6494 233.867 47.0909 235.63 47.0909Z",
    stroke: "#FFF",
  },
  {
    id: "path7",
    path: "M289.342 23.8442L281.619 24.7792C281.4 23.9134 281.018 23.0996 280.472 22.3377C279.942 21.5758 279.224 20.961 278.319 20.4935C277.414 20.026 276.306 19.7922 274.996 19.7922C273.232 19.7922 271.75 20.2165 270.549 21.0649C269.363 21.9134 268.778 23.013 268.794 24.3636C268.778 25.5238 269.16 26.4675 269.94 27.1948C270.736 27.9221 272.047 28.5195 273.872 28.987L280.004 30.4416C283.405 31.2554 285.933 32.5455 287.587 34.3117C289.256 36.0779 290.099 38.3896 290.114 41.2468C290.099 43.7576 289.436 45.974 288.125 47.8961C286.83 49.8009 285.028 51.29 282.719 52.3636C280.41 53.4372 277.757 53.974 274.762 53.974C270.362 53.974 266.82 52.9524 264.136 50.9091C261.453 48.8485 259.853 45.9827 259.338 42.3117L267.6 41.4286C267.974 43.2294 268.77 44.5887 269.987 45.5065C271.204 46.4242 272.788 46.8831 274.738 46.8831C276.751 46.8831 278.366 46.4242 279.583 45.5065C280.815 44.5887 281.432 43.4545 281.432 42.1039C281.432 40.961 281.034 40.0173 280.238 39.2727C279.458 38.5281 278.241 37.9567 276.587 37.5584L270.455 36.1299C267.007 35.3333 264.456 33.9913 262.802 32.1039C261.148 30.1991 260.329 27.7922 260.345 24.8831C260.329 22.4242 260.93 20.2944 262.147 18.4935C263.379 16.6753 265.088 15.2727 267.272 14.2857C269.472 13.2814 272.008 12.7792 274.879 12.7792C279.091 12.7792 282.407 13.7749 284.825 15.7662C287.259 17.7576 288.765 20.4502 289.342 23.8442Z",
    stroke: "#FFF",
  },
  {
    id: "path8",
    path: "M313.015 53.974C309.411 53.974 306.298 53.1429 303.677 51.4805C301.071 49.8009 299.066 47.4286 297.662 44.3636C296.258 41.2814 295.556 37.6537 295.556 33.4805C295.556 29.3766 296.258 25.7749 297.662 22.6753C299.082 19.5584 301.064 17.1342 303.607 15.4026C306.15 13.6537 309.138 12.7792 312.57 12.7792C314.786 12.7792 316.877 13.1775 318.843 13.974C320.824 14.7532 322.572 15.9654 324.085 17.6104C325.614 19.2554 326.816 21.3506 327.689 23.8961C328.563 26.4242 329 29.4372 329 32.9351V35.8182H299.535V29.4805H320.879C320.863 27.6797 320.512 26.0779 319.826 24.6753C319.139 23.2554 318.18 22.1385 316.947 21.3247C315.73 20.5108 314.31 20.1039 312.688 20.1039C310.956 20.1039 309.434 20.5714 308.124 21.5065C306.813 22.4242 305.791 23.6364 305.058 25.1429C304.34 26.632 303.973 28.2684 303.958 30.052V35.5844C303.958 37.9048 304.34 39.8961 305.105 41.5584C305.869 43.2035 306.938 44.4675 308.311 45.3507C309.684 46.2165 311.291 46.6494 313.132 46.6494C314.365 46.6494 315.48 46.4589 316.479 46.0779C317.478 45.6797 318.343 45.0996 319.077 44.3377C319.81 43.5758 320.364 42.632 320.738 41.5065L328.649 42.4935C328.15 44.8139 327.198 46.8398 325.794 48.5714C324.405 50.2857 322.626 51.619 320.458 52.5714C318.289 53.5065 315.808 53.974 313.015 53.974Z",
    stroke: "#FFF",
  },
];

export const features = [
  {
    title: "GPT 4 Integration",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.",
    icon: React.createElement(SiOpenai),
    backgroundImage: "url(https://via.placeholder.com/600x500)",
  },
  {
    title: "Wolfram Alpha",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.",
    icon: React.createElement(SiWolfram),
    backgroundImage: "url(/math.svg)",
  },
  {
    title: "Import/Export Notes",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.",
    icon: React.createElement(NotebookPen),
    backgroundImage: "url(/path.svgs)",
  },
  {
    title: "Collaboration Tools",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.",
    icon: React.createElement(Users),
    backgroundImage: "url(https://via.placeholder.com/600x500)",
  },
] as const;
