import type { NextPage } from 'next'
import Image from 'next/image'
import { ATagButton } from '../../components/Common/Button'

const Ecosystem: NextPage = () => {
  return (
    <section className="w-full bg-yellow-100 px-6 py-16 pb-32 md:px-16">
      <div className="m-auto max-w-3xl py-16 text-left ">
        <h1>
          <span className="text-primary-main">Ökosystem entdecken?</span>
          <br />
          Jetzt eintauchen.
        </h1>
        <p className="pt-8 text-lg md:text-2xl">
          Unsere Liste erlaubt dir, einfach und effizient Angebote und Akteure
          am Standort zu durchstöbern. Du kannst nach Themen wie Blockchain,
          Digital Health, Biotech et. und nach Typen wie Startup,
          Flächenangebot, Research etc. filtern. So kannst du dich inspierieren
          lassen un zum Beispiel sehen, was es alles zu einem bestimmten Thema
          gibt oder welche Startups in der Region sind. Du kannst aber auch
          gezielt etwas suchen, wie z.B. einen Passeneden Coworking-Space oder
          ein Accelerator- bzw. Inkubator Programm. Am besten du shaust selber:
        </p>
      </div>

      <div className="w-full rounded-lg bg-white p-6">
        <Image
          src="/images/airtable-image.jpg"
          alt="Airtable screenshot"
          layout="responsive"
          width={1600}
          height={900}
        />
      </div>
      <h2 className="my-16">
        <span className="pb-8 text-primary-main">Interested?</span>
        <br />
        See the organisations table!
      </h2>
      <ATagButton
        target="_blank"
        href="https://airtable.com/shrvY4SoUajhElMFP/tbl8Z68FXQp21x9qr"
      >
        See Organisations
      </ATagButton>
    </section>
  )
}

export default Ecosystem
