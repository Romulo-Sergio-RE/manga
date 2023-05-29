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


export default function Home() {
  return (
    <main>
      <ApiMangaProvider>
        <Suspense fallback={<Loading />}>
          <FirstSection />
        </Suspense>
      </ApiMangaProvider>
    </main>
  )
}
