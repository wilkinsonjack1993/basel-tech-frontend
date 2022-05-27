import Image from 'next/image'
import { InfoCard } from './InfoCard'

export const InfoCardSection = () => {
  return (
    <section className="grid grid-cols-1 pt-20 last:justify-center md:grid-cols-1 lg:grid-cols-3">
      <InfoCard
        title="Startups und Unternehmer*innen"
        image={
          <Image
            src="/icons/building.png"
            alt="Startups and Unternehmer*innen"
            width={72}
            height={70}
          />
        }
      >
        Finde Flächenangebote, Corporate Innovationsprogramme, Forschungs- &
        Kooperationspartner, Finanzierungshilfen und mehr um dein Unternehmen
        zum Erfolg zu führen.
      </InfoCard>
      <InfoCard
        title="Startups und Unternehmer*innen"
        image={
          <Image
            src="/icons/building.png"
            alt="Startups and Unternehmer*innen"
            width={72}
            height={70}
          />
        }
      >
        Finde Flächenangebote, Corporate Innovationsprogramme, Forschungs- &
        Kooperationspartner, Finanzierungshilfen und mehr um dein Unternehmen
        zum Erfolg zu führen.
      </InfoCard>
      <InfoCard
        title="Startups und Unternehmer*innen"
        image={
          <Image
            src="/icons/building.png"
            alt="Startups and Unternehmer*innen"
            width={72}
            height={70}
          />
        }
      >
        Finde Flächenangebote, Corporate Innovationsprogramme, Forschungs- &
        Kooperationspartner, Finanzierungshilfen und mehr um dein Unternehmen
        zum Erfolg zu führen.
      </InfoCard>
    </section>
  )
}
