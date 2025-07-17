import Image from 'next/image';
import Button from './Button';

// Local event images
const eventImage1 = "/images/events/event-1.png";
const eventImage2 = "/images/events/event-2.png";
const eventImage3 = "/images/events/event-3.png";
const eventImage4 = "/images/events/event-4.png";
const eventImage5 = "/images/events/event-5.png";
const eventImage6 = "/images/events/event-6.png";

interface EventCardProps {
  date: string;
  month: string;
  time: string;
  title: string;
  image: string;
}

const EventCard = ({ date, month, time, title, image }: EventCardProps) => (
  <div className="basis-0 bg-white box-border flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0 group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] rounded-lg overflow-hidden border border-gray-100">
    <div className="bg-center bg-cover bg-no-repeat h-60 shrink-0 w-full relative overflow-hidden">
      <Image src={image} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
    </div>
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center relative w-full">
        <div className="box-border flex flex-col gap-6 items-start justify-center p-6 relative w-full">
          <div className="box-border flex flex-col gap-4 items-start justify-start p-0 relative w-full">
            <div className="box-border flex flex-row gap-3 items-center justify-start p-0 relative shrink-0">
              <div className="font-['Barlow'] font-medium text-[40px] text-[#101820] tracking-[-0.8px] leading-[40px]">
                {date}
              </div>
              <div className="flex flex-col font-['Poppins'] text-[#101820] text-sm">
                <div className="leading-5 font-semibold">{month}</div>
                <div className="leading-5 text-gray-600">{time}</div>
              </div>
            </div>
            <h3 className="font-['Barlow'] font-medium text-2xl text-[#101820] tracking-[-0.48px] leading-8 group-hover:text-[#003594] transition-colors">
              {title}
            </h3>
          </div>
          <div className="flex flex-row gap-3 w-full">
            <button className="grow h-12 px-6 border-2 border-[#757575] text-[#101820] font-['Poppins'] font-semibold text-sm hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 rounded-sm">
              More Info
            </button>
            <button className="grow h-12 px-6 bg-[#003594] text-white font-['Poppins'] font-semibold text-sm hover:bg-[#004bbb] transition-all duration-300 rounded-sm shadow-md hover:shadow-lg">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function UpcomingEventsSection() {
  const events = [
    {
      date: "19",
      month: "MAY",
      time: "12:00-12:45PM",
      title: "OWASP London Chapter",
      image: eventImage1
    },
    {
      date: "22",
      month: "MAY",
      time: "2:00-3:30PM",
      title: "OWASP Berlin Meetup",
      image: eventImage2
    },
    {
      date: "25",
      month: "MAY",
      time: "10:00-11:30AM",
      title: "OWASP Tokyo Workshop",
      image: eventImage3
    },
    {
      date: "28",
      month: "MAY",
      time: "6:00-7:30PM",
      title: "OWASP NYC Chapter",
      image: eventImage4
    },
    {
      date: "02",
      month: "JUN",
      time: "9:00-10:30AM",
      title: "OWASP Sydney Chapter",
      image: eventImage5
    },
    {
      date: "05",
      month: "JUN",
      time: "3:00-4:30PM",
      title: "OWASP Paris Security Day",
      image: eventImage6
    }
  ];

  return (
    <div className="bg-[#f1f6fe] relative w-full">
      <div className="flex flex-col items-center relative w-full">
        <div className="box-border flex flex-col gap-16 items-center justify-start px-[120px] py-20 relative w-full max-w-[1440px]">
          <div className="box-border flex flex-row gap-8 items-end justify-between p-0 relative w-full">
            <div className="basis-0 box-border flex flex-col gap-8 grow items-start justify-start min-h-px min-w-px p-0 relative">
              <h2 className="font-['Barlow'] font-medium text-[56px] text-[#101820] leading-[56px] tracking-[-1.12px]">
                Upcoming Events
              </h2>
              <p className="font-['Poppins'] text-[#757575] text-base tracking-[-0.32px] leading-6 max-w-2xl">
                Stay connected with the global AppSec community through OWASP's
                upcoming conferences, chapter meetups, and training sessions.
              </p>
            </div>
            <button className="h-12 px-6 border-2 border-[#757575] text-[#101820] font-['Poppins'] font-semibold text-sm hover:bg-white hover:border-gray-400 transition-all duration-300 rounded-sm">
              See All Events
            </button>
          </div>
          <div className="box-border flex flex-col gap-8 items-start justify-start p-0 relative w-full">
            <div className="box-border flex flex-row gap-8 items-start justify-start p-0 relative w-full">
              <EventCard {...events[0]} />
              <EventCard {...events[1]} />
              <EventCard {...events[2]} />
            </div>
            <div className="box-border flex flex-row gap-8 items-start justify-start p-0 relative w-full">
              <EventCard {...events[3]} />
              <EventCard {...events[4]} />
              <EventCard {...events[5]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 