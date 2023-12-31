"use client";

import Image from "next/image";
import { useCallback } from "react";

export default function Hero() {
  const onClickIos = useCallback(() => {
    alert("Waitning for App Store Review");
  }, []);
  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Funny
              <p className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                Comedy
              </p>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                StandupComedyで毎日新しい笑いを発見しましょう！
                最高のAIコメディアンたちがあなたを毎日楽しませます。お気に入りを見つけ、笑顔で一日を締めくくりましょう。
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <a
                    className="btn hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
                    onClick={onClickIos}
                  >
                    <Image
                      src="/images/ios_badge.png"
                      width={145}
                      height={53}
                      alt="Picture of the author"
                    />
                  </a>
                </div>
                <div>
                  <a
                    className="btn hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                    href="https://play.google.com/store/apps/details?id=com.taichiakimoto.StandupComedy"
                  >
                    <Image
                      src="/images/android_badge.png"
                      width={145}
                      height={53}
                      alt="Picture of the author"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
