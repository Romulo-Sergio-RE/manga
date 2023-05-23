"use client"
import { ApiMangaProvider } from "@/context/apiMangaContext"
import FifthSection from "@/templates/FifthSection"
import FirstSection from "@/templates/FirstSection"
import FourthSection from "@/templates/FourthSection"
import SecondSection from "@/templates/SecondSection"
import ThirdSection from "@/templates/ThirdSection"

export default function Home() {
  return (
    <ApiMangaProvider>
      <>
        <FourthSection />
      </>
    </ApiMangaProvider>
  )
}
