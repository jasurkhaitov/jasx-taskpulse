import Asana from '../assets/alternative/asana.svg'
import Clickup from '../assets/alternative/clickup.png'
import Monday from '../assets/alternative/monday.webp'
import Notion from '../assets/alternative/notion.png'
import Paymo from '../assets/alternative/paymo.png'
import Smartsheet from '../assets/alternative/smartsheet.png'
import Trello from '../assets/alternative/trello.svg'
import Wrike from '../assets/alternative/wrike.svg'

export const Altimg = [ Asana, Clickup, Monday, Notion, Paymo, Smartsheet, Trello, Wrike ]

export const iconSvg = {
    sun: (<svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24"><path fill="white" fill-rule="evenodd" d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0zM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414zM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0z" clip-rule="evenodd"/></svg>),

    moon: (<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 256 256"><path fill="currentColor" d="M233.54 142.23a8 8 0 0 0-8-2a88.08 88.08 0 0 1-109.8-109.8a8 8 0 0 0-10-10a104.84 104.84 0 0 0-52.91 37A104 104 0 0 0 136 224a103.1 103.1 0 0 0 62.52-20.88a104.84 104.84 0 0 0 37-52.91a8 8 0 0 0-1.98-7.98m-44.64 48.11A88 88 0 0 1 65.66 67.11a89 89 0 0 1 31.4-26A106 106 0 0 0 96 56a104.11 104.11 0 0 0 104 104a106 106 0 0 0 14.92-1.06a89 89 0 0 1-26.02 31.4"/></svg>),

    user: (<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 36 36"><path fill="white" d="M18 17a7 7 0 1 0-7-7a7 7 0 0 0 7 7m0-12a5 5 0 1 1-5 5a5 5 0 0 1 5-5" className="clr-i-outline clr-i-outline-path-1"/><path fill="white" d="M30.47 24.37a17.16 17.16 0 0 0-24.93 0A2 2 0 0 0 5 25.74V31a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2v-5.26a2 2 0 0 0-.53-1.37M29 31H7v-5.27a15.17 15.17 0 0 1 22 0Z" className="clr-i-outline clr-i-outline-path-2"/><path fill="none" d="M0 0h36v36H0z"/></svg>)
}

export const TabsArr = [
    {
        name: "Monthly Budget",
        value: "budget",
        content: "Take control of your finances with our Monthly Budget tool. This user-friendly feature allows you to plan and track your spending, ensuring you stay within your financial goals. Categorize your expenses, set spending limits, and monitor your progress with detailed reports and visual charts. Simplify your budgeting process and make informed financial decisions each month."
    },

    {
        name: "Calendar Event",
        value: "calendar",
        content: "Effortlessly manage your schedule with our Calendar Event feature. Easily create, edit, and track events to stay organized and on top of your commitments. Set reminders, invite participants, and sync with other calendars to ensure you never miss an important meeting or deadline. Streamline your planning and keep your calendar up-to-date with this versatile scheduling tool."
    },

    {
        name: "Journal",
        value: "journal",
        content: "Capture your thoughts, ideas, and experiences with our Journal feature. This digital diary allows you to write, organize, and reflect on your entries in a secure and user-friendly interface. Add tags, images, and mood indicators to enrich your journaling experience. Whether for personal reflection or professional note-taking, the Journal helps you keep your thoughts organized and accessible."
    },

    {
        name: "Project Plan",
        value: "deadline",
        content: "Streamline your project management with our Project Plan with Deadline feature. This tool enables you to create detailed project plans, set clear deadlines, and assign tasks to team members. Track progress with visual timelines and ensure timely completion of each phase. Stay organized and keep your team aligned with goals and deadlines for successful project delivery."
    },

    {
        name: "Read List",
        value: "story",
        content: "Keep track of articles, documents, and resources you want to read later with our Read List feature. Easily add items from the web or upload your own files to access them at your convenience. Stay organized and never miss out on valuable information again."
    },

    {
        name: "Weekly To-Do",
        value: "weekly",
        content: "Stay organized and productive with our Weekly To-Do feature. Plan your week efficiently by listing tasks, setting priorities, and scheduling deadlines. With a clear overview of your commitments, you can tackle each day with confidence and achieve your goals effectively."
    },
    
    {
        name: "User Management",
        value: "user",
        content: "Efficiently manage user access and permissions with our User Management feature. Easily add, remove, or update user accounts and customize their permissions based on roles and responsibilities. Ensure data security and streamline collaboration by centralizing user administration within your platform."
    },
]

export const ContactLink =[
    {
        svg: (<svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 256 256"><defs><linearGradient id="logosTelegram0" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#2aabee"/><stop offset="100%" stop-color="#229ed9"/></linearGradient></defs><path fill="url(#logosTelegram0)" d="M128 0C94.06 0 61.48 13.494 37.5 37.49A128.04 128.04 0 0 0 0 128c0 33.934 13.5 66.514 37.5 90.51C61.48 242.506 94.06 256 128 256s66.52-13.494 90.5-37.49c24-23.996 37.5-56.576 37.5-90.51s-13.5-66.514-37.5-90.51C194.52 13.494 161.94 0 128 0"/><path fill="#fff" d="M57.94 126.648q55.98-24.384 74.64-32.152c35.56-14.786 42.94-17.354 47.76-17.441c1.06-.017 3.42.245 4.96 1.49c1.28 1.05 1.64 2.47 1.82 3.467c.16.996.38 3.266.2 5.038c-1.92 20.24-10.26 69.356-14.5 92.026c-1.78 9.592-5.32 12.808-8.74 13.122c-7.44.684-13.08-4.912-20.28-9.63c-11.26-7.386-17.62-11.982-28.56-19.188c-12.64-8.328-4.44-12.906 2.76-20.386c1.88-1.958 34.64-31.748 35.26-34.45c.08-.338.16-1.598-.6-2.262c-.74-.666-1.84-.438-2.64-.258c-1.14.256-19.12 12.152-54 35.686c-5.1 3.508-9.72 5.218-13.88 5.128c-4.56-.098-13.36-2.584-19.9-4.708c-8-2.606-14.38-3.984-13.82-8.41c.28-2.304 3.46-4.662 9.52-7.072"/></svg>),

        url: 'http://t.me/jasurkhaitov',
    },

    {
        svg: (<svg xmlns="http://www.w3.org/2000/svg" width="26.53px" height="25px" viewBox="0 0 256 193"><path fill="#4285f4" d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455z"/><path fill="#34a853" d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798z"/><path fill="#ea4335" d="m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z"/><path fill="#fbbc04" d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945z"/><path fill="#c5221f" d="m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23z"/></svg>),

        url: 'mailto:xaitovjasur0@gmail.com'
    },

    {
        svg: (<svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24"><path fill="white" d="M12 .999c-6.074 0-11 5.05-11 11.278c0 4.983 3.152 9.21 7.523 10.702c.55.104.727-.246.727-.543v-2.1c-3.06.683-3.697-1.33-3.697-1.33c-.5-1.304-1.222-1.65-1.222-1.65c-.998-.7.076-.686.076-.686c1.105.08 1.686 1.163 1.686 1.163c.98 1.724 2.573 1.226 3.201.937c.098-.728.383-1.226.698-1.508c-2.442-.286-5.01-1.253-5.01-5.574c0-1.232.429-2.237 1.132-3.027c-.114-.285-.49-1.432.107-2.985c0 0 .924-.303 3.026 1.156c.877-.25 1.818-.375 2.753-.38c.935.005 1.876.13 2.755.38c2.1-1.459 3.023-1.156 3.023-1.156c.598 1.554.222 2.701.108 2.985c.706.79 1.132 1.796 1.132 3.027c0 4.332-2.573 5.286-5.022 5.565c.394.35.754 1.036.754 2.088v3.095c0 .3.176.652.734.542C19.852 21.484 23 17.258 23 12.277C23 6.048 18.075.999 12 .999"/></svg>),
        
        url: 'https://github.com/jasurkhaitov',
    },

    {
        svg: (<svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#fff" rx="60"/><rect width="256" height="256" fill="#0a66c2" rx="60"/><path fill="#fff" d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4"/></g></svg>),

        url: "https://www.linkedin.com/in/jasurkhaitov"
    }
]