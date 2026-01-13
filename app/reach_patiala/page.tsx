import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px]">
      <div className="w-screen flex flex-col gap-2 justify-center p-2">
<Link href="/" className="self-center">
  <Button className="w-[90vw] text-lg font-[Nippo-Variable]">Go back</Button>
</Link>
<div className="text-md text-center">Numbers might slightly vary depending upon the time and date</div>
<Card className="p-2">
<div className="text-2xl font-bold">By Train</div>
<div className="text-lg">
The nearest railway station is Patiala Junction
From Major Railway Stations:
<ul className="pl-8" style={{
  listStyleType: 'initial'
}}>
<li>
  Ambala Junction has the best connectivity to Patiala. If not Patiala, then
  reaching Ambala Railway Station would be the most convenient route. To Thapar,
</li>
<li>
  Rajpura Junction is closer to Patiala (30Kms) but has limited trains. A cab can
  be booked from Rajpura to Thapar for ₹700-1000, journey duration is 45mins
</li>
<li>
  If coming from New Delhi: Board any train heading towards Patiala or nearby
  stations like Ambala. Travel time is approximately 5 hours.
</li>
<li>
From Chandigarh Railway Station: Take a direct or connecting train to Patiala
Junction (around 2 hours).
</li>
</ul>
From Patiala Junction to Thapar:
Take an auto/rickshaw (₹50-100). The campus is just 5.7 km away from the railway
station.
</div>
</Card>
<Card className="p-2">
<div className="text-2xl font-bold">By Road</div>
Patiala is connected by road with major cities like Delhi, Chandigarh, and Amritsar.
Frequent buses (Punjab Roadways and private operators) connect Patiala with major cities in
North India. Below are the details for convenient travel to Patiala:
<ul className="pl-8" style={{
  listStyleType: 'initial'
}}>
  <li>
<div className="text-xl">From Ambala (70 km):</div>
Multiple buses are available throughout the day, starting as early as 5:00 AM.
The fare is approximately ₹80 per person, and the travel time is around 2 hours.
Alternatively, you can book a cab from Ambala to Patiala, costing around
₹1100-₹1500, which takes about 1.5 hours.
  </li>
  <li>
<div className="text-xl">From Chandigarh (70 km):</div>
Buses to Patiala depart from ISBT Sector 43 at regular intervals.
The travel time is approximately 2 hours, and the fare ranges from ₹120-₹150
per person, depending on the type of bus (ordinary or AC Volvo).
For a more private and comfortable option, cabs are readily available and cost
around ₹1000 - ₹1400, taking about 1.5 hours to reach Patiala.
  </li>
  <li>
<div className="text-xl">From Delhi (250 km):</div>
Direct buses to Patiala are available from ISBT Kashmere Gate, starting as early
as 5:30 AM, with departures at regular intervals.
The fare for ordinary buses is approximately ₹340-₹450 per person, while AC
Volvo buses charge around ₹720 per person. The journey takes around 6
hours, depending on traffic.
Cabs can also be booked from Delhi to Patiala for a more direct option, with
costs ranging from ₹3000 - ₹4000. The drive takes approximately 4.5-5 hours via
NH44 and NH7.
Get down at Patiala Bus Stand, around 11 km from the Thapar campus. From there, take a
local autorickshaw (₹50 per person in sharing or ₹200 if traveling alone) (cost can increase if
you pre-book an auto or after mid-night)
  </li>
</ul>
</Card>
<Card className="p-2">
<div className="text-2xl font-bold">By Air</div>
The nearest airport to the venue is Chandigarh International Airport.
<ul className="pl-8" style={{
  listStyleType: 'initial'
}}>
<li>
Take a prepaid taxi or book a private cab to Patiala. The distance is about 70
km, and it will take approximately 1.5 hours to reach Thapar Institute.
</li>
<li>
Follow the instructions under "By Train" if you prefer traveling via train from
Chandigarh to Patiala.
</li>
<li>
Follow the instructions under "By Road" if you want to travel via road.
</li>
</ul>
</Card>
      </div>
    </div>
  )
}
