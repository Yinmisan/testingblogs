import Link from "next/link";
import Image from "next/image";

import { cardthing } from "@/app/cards";

export default function Cardthing() {
  return (
    <div className="grid grid-cols-1 gap-x-3 gap-y-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {cardthing.map((student, index) => {
        return (
          <div key={`this a id ${index}`}>
            <Link href={student.link}>
              <div className="card w-96 bg-base-100 shadow-xl image-full  hover:scale-95">
                <figure>
                  <Image
                    src={student.imgName}
                    alt={student.imgalt}
                    width={500}
                    height={500}
                  />
                </figure>

                <div className="card-body">
                  <h2 className="card-title">{student.cardTitle}</h2>
                  <p>{student.cardPara}</p>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
