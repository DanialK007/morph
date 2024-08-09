import React from 'react'
import Bigger from './Bigger'
import Link from 'next/link'

function Gallery() {
  return (
    <section id="gallery" className="pb-12 md:pb-24">
        <div className="px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl py-2 text-secondary">
              Our Gallery
            </h2>
            <p className="text-secondary/60 text-lg">
              Our digital marketing services are designed to help your business
              thrive in the digital age.
            </p>
          </div>
          <div className="max-w-7xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <Bigger>
              <div className="relative overflow-hidden bg-secondary shadow-lg transition-all h-[350px] group">
                <img
                  src="https://i0.wp.com/picjumbo.com/wp-content/uploads/business-man-team-leader-boss-speaking-at-company-team-meeting-free-photo.jpg?w=600&quality=80"
                  width={600}
                  height={400}
                  alt="Project 1"
                  className="h-full w-full object-cover object-center group-hover:scale-105 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#150f04] to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-bold font-montserrat">
                    Project 1
                  </h3>
                  <p className="mt-2 text-base font-roboto">
                    A brief description of the project.
                  </p>
                  <div className="mt-4 flex gap-2">
                    {/* <Link
                      href="#"
                      className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary"
                      prefetch={false}
                    >
                      View Project
                    </Link>
                    <Link
                      href="#"
                      className="rounded-lg border border-primary px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
                      prefetch={false}
                    >
                      GitHub
                    </Link> */}
                  </div>
                </div>
              </div>
            </Bigger>
            <Bigger>
              <div className="relative overflow-hidden bg-secondary shadow-lg transition-all h-[350px] group">
                <img
                  src="https://as2.ftcdn.net/v2/jpg/04/15/11/67/1000_F_415116776_C4I8BdqBElVnFNPngMnyusw1JTMw8SGA.jpg"
                  width={600}
                  height={400}
                  alt="Project 2"
                  className="h-full w-full object-cover object-center group-hover:scale-105 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#150f04] to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-bold font-montserrat">
                    Project 2
                  </h3>
                  <p className="mt-2 text-base font-roboto">
                    A brief description of the project.
                  </p>
                  <div className="mt-4 flex gap-2">
                    {/* <Link
                      href="#"
                      className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary"
                      prefetch={false}
                    >
                      View Project
                    </Link>
                    <Link
                      href="#"
                      className="rounded-lg border border-primary px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
                      prefetch={false}
                    >
                      GitHub
                    </Link> */}
                  </div>
                </div>
              </div>
            </Bigger>
            <Bigger>
              <div className="relative overflow-hidden bg-secondary shadow-lg transition-all h-[350px] group">
                <img
                  src="https://cdn.prod.website-files.com/643584c672ffeed70ac3337c/644c3d9b1dcd00bf24b656b4_Project-Kick-off-meeting-1024x683.jpeg"
                  width={600}
                  height={400}
                  alt="Project 3"
                  className="h-full w-full object-cover object-center group-hover:scale-105 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#150f04] to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-bold font-montserrat">
                    Project 3
                  </h3>
                  <p className="mt-2 text-base font-roboto">
                    A brief description of the project.
                  </p>
                  <div className="mt-4 flex gap-2">
                    {/* <Link
                      href="#"
                      className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary"
                      prefetch={false}
                    >
                      View Project
                    </Link>
                    <Link
                      href="#"
                      className="rounded-lg border border-primary px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
                      prefetch={false}
                    >
                      GitHub
                    </Link> */}
                  </div>
                </div>
              </div>
            </Bigger>
            <Bigger>
              <div className="relative overflow-hidden bg-secondary shadow-lg transition-all h-[350px] group">
                <img
                  src="https://website2021-live-e3e78fbbd3cc41f2847799-7c49c59.divio-media.com/filer_public/80/d0/80d08b7d-c480-42f0-a83d-03b7ef72e22c/kick-off-meeting.jpg"
                  width={600}
                  height={400}
                  alt="Project 1"
                  className="h-full w-full object-cover object-center group-hover:scale-105 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#150f04] to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-bold font-montserrat">
                    Project 1
                  </h3>
                  <p className="mt-2 text-base font-roboto">
                    A brief description of the project.
                  </p>
                  <div className="mt-4 flex gap-2">
                    {/* <Link
                      href="#"
                      className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary"
                      prefetch={false}
                    >
                      View Project
                    </Link>
                    <Link
                      href="#"
                      className="rounded-lg border border-primary px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
                      prefetch={false}
                    >
                      GitHub
                    </Link> */}
                  </div>
                </div>
              </div>
            </Bigger>
            <Bigger>
              <div className="relative overflow-hidden bg-secondary shadow-lg transition-all h-[350px] group">
                <img
                  src="https://img.freepik.com/premium-photo/people-business-suits-working-brainstorming-together-while-sitting-desk-with-laptop-white-modern-office_386167-15994.jpg"
                  width={600}
                  height={400}
                  alt="Project 2"
                  className="h-full w-full object-cover object-center group-hover:scale-105 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#150f04] to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-bold font-montserrat">
                    Project 2
                  </h3>
                  <p className="mt-2 text-base font-roboto">
                    A brief description of the project.
                  </p>
                  <div className="mt-4 flex gap-2">
                    {/* <Link
                      href="#"
                      className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary"
                      prefetch={false}
                    >
                      View Project
                    </Link>
                    <Link
                      href="#"
                      className="rounded-lg border border-primary px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
                      prefetch={false}
                    >
                      GitHub
                    </Link> */}
                  </div>
                </div>
              </div>
            </Bigger>
            <Bigger>
              <div className="relative overflow-hidden bg-secondary shadow-lg transition-all h-[350px] group">
                <img
                  src="https://media.istockphoto.com/id/1448823265/photo/project-management-leadership-and-planning-with-business-people-in-meeting-for-marketing.jpg?s=612x612&w=0&k=20&c=gAx1-8EP60j5amMyvxaaltasfBR2PhZ2WHY_tBZuzmg="
                  width={600}
                  height={400}
                  alt="Project 3"
                  className="h-full w-full object-cover object-center group-hover:scale-105 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#150f04] to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-bold font-montserrat">
                    Project 3
                  </h3>
                  <p className="mt-2 text-base font-roboto">
                    A brief description of the project.
                  </p>
                  <div className="mt-4 flex gap-2">
                    {/* <Link
                      href="#"
                      className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary"
                      prefetch={false}
                    >
                      View Project
                    </Link>
                    <Link
                      href="#"
                      className="rounded-lg border border-primary px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
                      prefetch={false}
                    >
                      GitHub
                    </Link> */}
                  </div>
                </div>
              </div>
            </Bigger>
          </div>
        </div>
      </section>
  )
}

export default Gallery
