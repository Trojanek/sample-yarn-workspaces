import { locations } from '@jj/dictionary';

export default function Home() {
  return (
    <div>
      <h1>Next.js</h1>
      {locations.map(location => (
        <p key={location}>
          {location}
        </p>
      ))}
    </div>
  )
}
