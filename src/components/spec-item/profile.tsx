import React from "react"
import {
  HiOutlineCalendar,
  HiOutlineMail,
  HiOutlineNewspaper,
  HiOutlinePhone,
} from "react-icons/hi"
import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiTwitter,
  SiUplabs,
} from "react-icons/si"
import { bio } from "@/utils/"
import cv from "../../utils/cv-muhrusdi-2022.pdf"

const ProfileItem: React.FC = () => (
  <div>
    <p>I’m {bio}</p>
    <ul className="mt-8 whitespace-nowrap">
      <li>
        <div className="sm:flex bg-gray-900 rounded-md py-2 px-4 mt-4">
          <div className="w-2/5 text-gray-500 sm:text-white flex items-center">
            <span className="mr-3">
              <HiOutlineMail />
            </span>
            <span>Email</span>
          </div>
          <div className="w-3/5">
            <span>mhmrofficial@gmail.com</span>
          </div>
        </div>
      </li>
      <li>
        <div className="sm:flex bg-gray-900 rounded-md py-2 px-4 mt-4">
          <div className="w-2/5 text-gray-500 sm:text-white flex items-center">
            <span className="mr-3">
              <HiOutlineCalendar />
            </span>
            <span>Date of birth</span>
          </div>
          <div className="w-3/5">
            <span>14 September 1992</span>
          </div>
        </div>
      </li>
      <li>
        <div className="sm:flex bg-gray-900 rounded-md py-2 px-4 mt-4">
          <div className="w-2/5 text-gray-500 sm:text-white flex items-center">
            <span className="mr-3">
              <HiOutlinePhone />
            </span>
            <span>Telephone</span>
          </div>
          <div className="w-3/5">
            <span>+62 85155188958</span>
          </div>
        </div>
      </li>
      <li>
        <div className="sm:flex bg-gray-900 rounded-md py-2 px-4 mt-4">
          <div className="w-2/5 text-gray-500 sm:text-white flex items-center">
            <span className="mr-3">
              <SiGithub />
            </span>
            <span>Github</span>
          </div>
          <div className="w-3/5">
            <span>
              <a
                className="text-indigo-500"
                href="https://github.com/muhrusdi"
                target="_blank"
                rel="noreferrer"
              >
                muhrusdi
              </a>
            </span>
          </div>
        </div>
      </li>
      <li>
        <div className="sm:flex bg-gray-900 rounded-md py-2 px-4 mt-4">
          <div className="w-2/5 text-gray-500 sm:text-white flex items-center">
            <span className="mr-3">
              <SiLinkedin />
            </span>
            <span>Linkedin</span>
          </div>
          <div className="w-3/5">
            <span>
              <a
                className="text-indigo-500"
                href="https://linkedin.com/in/muhrusdi/"
                target="_blank"
                rel="noreferrer"
              >
                muhrusdi
              </a>
            </span>
          </div>
        </div>
      </li>
      <li>
        <div className="sm:flex bg-gray-900 rounded-md py-2 px-4 mt-4">
          <div className="w-2/5 text-gray-500 sm:text-white flex items-center">
            <span className="mr-3">
              <SiTwitter />
            </span>
            <span>Twitter</span>
          </div>
          <div className="w-3/5">
            <span>
              <a
                className="text-indigo-500"
                href="https://twitter.com/mhmrus"
                target="_blank"
                rel="noreferrer"
              >
                mhmrus
              </a>
            </span>
          </div>
        </div>
      </li>
      <li>
        <div className="sm:flex bg-gray-900 rounded-md py-2 px-4 mt-4">
          <div className="w-2/5 text-gray-500 sm:text-white flex items-center">
            <span className="mr-3">
              <SiInstagram />
            </span>
            <span>Instagram</span>
          </div>
          <div className="w-3/5">
            <span>
              <a
                className="text-indigo-500"
                href="https://instagram.com/mhmrofficial/"
                target="_blank"
                rel="noreferrer"
              >
                mhmrofficial
              </a>
            </span>
          </div>
        </div>
      </li>
      <li>
        <div className="sm:flex bg-gray-900 rounded-md py-2 px-4 mt-4">
          <div className="w-2/5 text-gray-500 sm:text-white flex items-center">
            <span className="mr-3">
              <SiUplabs />
            </span>
            <span>Uplabs</span>
          </div>
          <div className="w-3/5">
            <span>
              <a
                className="text-indigo-500"
                href="https://uplabs.com/muhrusdi"
                target="_blank"
                rel="noreferrer"
              >
                muhrusdi
              </a>
            </span>
          </div>
        </div>
      </li>
      <li>
        <div className="sm:flex bg-gray-900 rounded-md py-2 px-4 mt-4">
          <div className="w-2/5 text-gray-500 sm:text-white flex items-center">
            <span className="mr-3">
              <HiOutlineNewspaper />
            </span>
            <span>Resume</span>
          </div>
          <div className="w-3/5">
            <span>
              <a
                className="bg-indigo-500 text-sm px-4 py-1 inline-block font-semibold rounded-full text-white"
                href={cv}
                target="_blank"
                rel="noreferrer"
              >
                Download
              </a>
            </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
)

export default ProfileItem
