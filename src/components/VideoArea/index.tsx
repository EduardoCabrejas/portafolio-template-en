import React, { FC } from "react";
import VideoCard from "./VideoCard";

const VideoArea: FC = () => {
  return (
    <section className="flex flex-col rounded-xl border-2 border-[var(--borderColor)] bg-[var(--navBarBackground)]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mx-4">
        <VideoCard
          src="https://youtube.com/embed/mXecCxzYujg"
          description={
            <>
              <h1 className="redact-title">StockSaleApp Website</h1>
              <p className="redact">
                A website to manage a hardware store. Freelance project worked
                with .NET, C#, and JavaScript.
              </p>
              <ul className="redact list-disc pl-4 mt-2">
                <li>Manage users, suppliers, and their products.</li>
                <li>Manage the buying and selling movements.</li>
                <li>Manage turns for users and providers.</li>
                <li>Be alert for products that are low in stock.</li>
              </ul>
            </>
          }
        />
        <VideoCard
          src="https://youtube.com/embed/2bcEALmt18g"
          description={
            <>
              <h1 className="redact-title">Stream Games Tournaments</h1>
              <p className="redact">
                A streaming platform for E-sports tournaments, where you can
                watch tournaments, form teams, and join competitions. I
                contributed significantly to the Frontend, specifically in
                buttons, banners, cards, filters, forms, interfaces, modals, and
                other things.
              </p>
            </>
          }
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 mx-4">
        <VideoCard
          src="https://youtube.com/embed/DCmIK3eQYns"
          description={
            <>
              <h1 className="redact-title">E-commerce Apple Products</h1>
              <p className="redact">
                I designed an e-commerce site specialized in Apple products.
                Once registered, users can explore to find available products,
                analyze them in detail, add items to the shopping cart, place
                orders, and cancel orders if they wish.
              </p>
            </>
          }
        />
        <VideoCard
          src="https://youtube.com/embed/i4scN6wH3DQ"
          description={
            <>
              <h1 className="redact-title">A.P.I.S. Deprogramming</h1>
              <p className="redact">
                I developed a page for my mother's business, where the offered
                activities, the team behind it, and the available services are
                detailed. I implemented a reservation system that allows
                registered users to schedule and cancel appointments according
                to their needs.
              </p>
            </>
          }
        />
      </div>
    </section>
  );
};

export default VideoArea;
