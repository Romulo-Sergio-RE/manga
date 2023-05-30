"use client"
import { ApiMangaProvider } from "@/context/apiMangaContext"
import FifthSection from "@/templates/FifthSection"
import FirstSection from "@/templates/FirstSection"
import FourthSection from "@/templates/FourthSection"
import SecondSection from "@/templates/SecondSection"
import SeventhSection from "@/templates/SeventhSection"
import ThirdSection from "@/templates/ThirdSection"
import { Suspense } from "react"
import Loading from "./loading"
import SixthSection from "@/templates/SixthSection"


export default function Home() {
  return (
    <>
      <ApiMangaProvider>
        <Suspense fallback={<Loading />}>
          <FirstSection />
          <SecondSection />
          <ThirdSection />
          <FourthSection />
          <FifthSection />
          <SeventhSection />
          {/* <SixthSection /> */}
        </Suspense>
      </ApiMangaProvider>
    </>
  )
}
