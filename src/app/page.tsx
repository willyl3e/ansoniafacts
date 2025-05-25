export default function Home() {
  return (
    <div className="ml-10 mr-10">
      <div className="text-center h-[90vh] flex items-center justify-center max-sm:scale-[70%]">
        <div>
          <h1 className="text-9xl font-bold tracking-tighter">ANSONIA</h1>
          <h2 className="mt-12 mb-3 text-5xl tracking-tight">
            Buried in Debt. Starved of Truth.
          </h2>
          <h3 className="text-2xl mb-20">
            Uncovering the Hidden Costs of 12 Years Under Cassetti
          </h3>
          <a className="absolute bottom-12" href="#issues">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="32px"
              viewBox="0 -960 960 960"
              width="32px"
              fill="#FFFFFF"
            >
              <path d="M480-200 240-440l56-56 184 183 184-183 56 56-240 240Zm0-240L240-680l56-56 184 183 184-183 56 56-240 240Z" />
            </svg>
          </a>
        </div>
      </div>

      <section
        id="issues"
        className="h-[100%] text-white pl-[10%] pr-[10%] mt-24 max-md:pl-[2%] max-md:pr-[2%]"
      >
        <div className="text-center mb-24">
          <p className="text-4xl leading-9 tracking-tight max-sm:text-3xl">
            For 12 years, Ansonia has faced mounting financial challenges while
            citizens have been left in the dark. Our investigation reveals the
            true cost of the current administration&apos;s policies and their impact
            on our community.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-16 [&>div]:text-center max-lg:grid-cols-1">
          <div id="city-financials" className="issue-card">
            <h3 className="font-bold text-4xl tracking-tighter mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="35px"
                viewBox="0 -960 960 960"
                width="35px"
                fill="#FFFFFF"
                className="mb-2 place-self-center"
              >
                <path d="M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm440 240H120q-33 0-56.5-23.5T40-240v-440h80v440h680v80ZM280-400v-320 320Z" />
              </svg>
              City Financials
            </h3>
            <p className="text-2xl leading-7 tracking-tight">
              Ansonia&apos;s debt has increased dramatically, with taxpayers bearing
              the burden. We break down the numbers behind the growing financial
              crisis and reveal the true state of our city&apos;s finances.
            </p>
          </div>
          <div id="city-scandals" className="issue-card">
            <h3 className="font-bold text-4xl tracking-tighter mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="35px"
                viewBox="0 -960 960 960"
                width="35px"
                fill="#FFFFFF"
                className="mb-2 place-self-center"
              >
                <path d="M440-120q-100 0-170-70t-70-170v-240l200 200-56 57-64-64v47q0 66 47 113t113 47q66 0 113-47t47-113v-127q-36-14-58-44.5T520-600q0-38 22-68.5t58-44.5v-167h80v167q36 14 58 44.5t22 68.5q0 38-22 69t-58 44v127q0 100-70 170t-170 70Zm200-440q17 0 28.5-11.5T680-600q0-17-11.5-28.5T640-640q-17 0-28.5 11.5T600-600q0 17 11.5 28.5T640-560Zm0-40Z" />
              </svg>
              City Scandals
            </h3>
            <p className="text-2xl leading-7 tracking-tight">
              Our investigation uncovers the pattern of mismanagement and
              questionable decisions that have plagued city government, costing
              taxpayers millions while undermining public trust.
            </p>
          </div>
          <div id="wpca-sale" className="issue-card">
            <h3 className="font-bold text-4xl tracking-tighter mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="35px"
                viewBox="0 -960 960 960"
                width="35px"
                fill="#FFFFFF"
                className="mb-2 place-self-center"
              >
                <path d="M856-390 570-104q-12 12-27 18t-30 6q-15 0-30-6t-27-18L103-457q-11-11-17-25.5T80-513v-287q0-33 23.5-56.5T160-880h287q16 0 31 6.5t26 17.5l352 353q12 12 17.5 27t5.5 30q0 15-5.5 29.5T856-390ZM513-160l286-286-353-354H160v286l353 354ZM260-640q25 0 42.5-17.5T320-700q0-25-17.5-42.5T260-760q-25 0-42.5 17.5T200-700q0 25 17.5 42.5T260-640Zm220 160Z" />
              </svg>
              The WPCA Sale
            </h3>
            <p className="text-2xl leading-7 tracking-tight">
              The controversial sale of Ansonia&apos;s Water Pollution Control
              Authority raises serious questions about transparency, valuation,
              and long-term consequences for residents and ratepayers.
            </p>
          </div>
          <div id="personal-scandals" className="issue-card">
            <h3 className="font-bold text-4xl tracking-tighter mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="35px"
                viewBox="0 -960 960 960"
                width="35px"
                fill="#FFFFFF"
                className="mb-2 place-self-center"
              >
                <path d="M360-390q-21 0-35.5-14.5T310-440q0-21 14.5-35.5T360-490q21 0 35.5 14.5T410-440q0 21-14.5 35.5T360-390Zm240 0q-21 0-35.5-14.5T550-440q0-21 14.5-35.5T600-490q21 0 35.5 14.5T650-440q0 21-14.5 35.5T600-390ZM480-160q134 0 227-93t93-227q0-24-3-46.5T786-570q-21 5-42 7.5t-44 2.5q-91 0-172-39T390-708q-32 78-91.5 135.5T160-486v6q0 134 93 227t227 93Zm0 80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-54-715q42 70 114 112.5T700-640q14 0 27-1.5t27-3.5q-42-70-114-112.5T480-800q-14 0-27 1.5t-27 3.5ZM177-581q51-29 89-75t57-103q-51 29-89 75t-57 103Zm249-214Zm-103 36Z" />
              </svg>
              Personal Scandals
            </h3>
            <p className="text-2xl leading-7 tracking-tight">
              Beyond city finances, we document the pattern of personal
              improprieties that reveal a troubling disregard for ethical
              standards in our city&apos;s leadership.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="content-section ml-[10%] mr-[10%] mt-24 p-14 border-gray-900 border-2 rounded-4xl drop-shadow-2xl bg-gray-950 max-md:ml-[2%] max-md:mr-[2%] max-sm:p-7">
        <h2 className="text-3xl tracking-tight font-bold">About our initiative</h2>
        <p className="text-2xl mt-3 leading-6 max-sm:text-xl">
          This citizen-led effort aims to bring transparency to Ansonia&apos;s
          finances and governance. We are a non-partisan group of concerned
          residents who believe in accountability and responsible stewardship of
          our town&apos;s resources.
        </p>
        <p className="text-2xl mt-3 leading-6 max-sm:text-xl">
          Our research is based on public records, financial documents, and
          comprehensive analysis of Ansonia&apos;s fiscal policies over the past 12
          years. We are committed to presenting accurate information so citizens
          can make informed decisions about our town&apos;s future.
        </p>
      </section>

      <section id="contact" className="content-section text-2xl mt-22">
        <p className="text-center">
          Have information to share? Want to get involved? Reach out to our
          team.
        </p>
        <div className="text-center mt-[30px]">
          <p>
            <strong>Email:</strong> info@ansoniatruth.org
          </p>
          <p>
            <strong>Phone:</strong> (203) 555-0123
          </p>
        </div>
      </section>

      
    </div>
  );
}
