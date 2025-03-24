"use client"

import { useState } from "react"
import { X } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  const [cookieVisible, setCookieVisible] = useState(true)

  return (
    <div className="relative min-h-screen bg-[#d2f027] overflow-hidden">
      {/* Top navigation */}
      <div className="flex justify-end p-6">
        <button className="flex items-center gap-2 font-bold">
          MENU
          <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center">
            <span className="text-xl">···</span>
          </div>
        </button>
      </div>

      {/* Small 404 at top */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2">
        <h1 className="text-4xl font-black">404</h1>
      </div>

      {/* Main 404 content */}
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-[15rem] leading-none font-black text-[#1a1a1a]">404</h1>
        <p className="text-4xl font-bold text-[#1a1a1a] mt-[-2rem] mb-8">Page Not Found...</p>

        {/* Animal silhouette */}
        <div className="relative">
          <span className="absolute -top-8 left-0 text-lg">Oooop</span>
          <svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M70 15C70 6.716 63.284 0 55 0H25C16.716 0 10 6.716 10 15V15C10 23.284 16.716 30 25 30H55C63.284 30 70 23.284 70 15V15Z"
              fill="black"
            />
            <path
              d="M10 20C10 15.582 6.418 12 2 12C-2.418 12 -6 15.582 -6 20V20C-6 24.418 -2.418 28 2 28C6.418 28 10 24.418 10 20V20Z"
              fill="black"
            />
            <path
              d="M86 20C86 15.582 82.418 12 78 12C73.582 12 70 15.582 70 20V20C70 24.418 73.582 28 78 28C82.418 28 86 24.418 86 20V20Z"
              fill="black"
            />
            <path d="M25 25L35 35" stroke="black" strokeWidth="3" strokeLinecap="round" />
            <path d="M55 25L45 35" stroke="black" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>

        <Link href="/" className="mt-8 underline">
          Return to Home
        </Link>
      </div>

      {/* Vertical text on right side */}
      <div className="absolute right-4 bottom-4 origin-bottom-right rotate-90 text-xs transform translate-y-full">
        Copyright © junni.co.Ltd. All Rights Reserved.
      </div>

      {/* Cookie notice */}
      {cookieVisible && (
        <div className="fixed bottom-4 left-4 right-4 bg-black text-white p-4 flex items-center justify-between">
          <p className="text-sm">
            当サイトでは、Cookieを使用しています。
            <br />
            詳しくは <span className="underline">Cookie ポリシー</span> をご確認ください。
          </p>
          <div className="flex gap-2">
            <button className="border border-white px-4 py-1" onClick={() => setCookieVisible(false)}>
              OK
            </button>
            <button className="border border-white px-3 py-1" onClick={() => setCookieVisible(false)}>
              <X size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

