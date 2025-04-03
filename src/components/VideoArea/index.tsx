const VideoArea: React.FC = () => {
  return (
    <>
      <section className="projectsContainer">
        <div className="videoContainer">
          <iframe
            className="video"
            src="https://youtube.com/embed/i4scN6wH3DQ"
            title="Integrator Project N° 3"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <p className="redact">
            In my third Integrative Project, I developed a page for the
            my mother&apos;s entrepreneurship, where the activities are detailed
            offered, the team behind and the services available. Implemented
            a booking system that allows registered users
            Schedule and cancel appointments according to your needs.
          </p>
        </div>
        <div className="videoContainer">
          <iframe
            className="video"
            src="https://youtube.com/embed/DCmIK3eQYns"
            title="Integrator Project N° 4"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <p className="redact">
            In my last Integrative Project, I designed a specialized e-commerce
            on Apple products. Registered users can browse and
            search for products in detail, add items to the
            purchases, place orders, and cancel orders if desired.
          </p>
        </div>
        <div className="videoContainer">
          <iframe
            className="video"
            src="https://youtube.com/embed/2bcEALmt18g"
            title="Final Project"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <p className="redact">
            In my final project, together with my team, we created a platform of
            streaming for E-sports tournaments. Users can view
            tournaments, form teams and join competitions. I contributed to
            the development of multiple elements, such as buttons, banners,
            business cards, filters, forms, charts,
            interfaces, modals, administrative sections, and tables.
          </p>
        </div>
        <div className="videoContainer">
          <iframe
            className="video"
            src="https://youtube.com/embed/mXecCxzYujg"
            title="StockSaleApp Presentation"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <p className="redact">
          This is a website developed for a client in my position as a Freelance Developer. On this site, the administrator or manager of the hardware store will be able to:<br/>
          <p className="redact-sm">• Manage users, suppliers and their products.<br/>
          • Manage the purchase/sale movements of the products, as well as their orders to resupply the store.<br/>
          • Manage the income/expenses of the day, as well as the details of all the movements that have occurred.<br/>
          • Receive notifications for products at the limit of stock to order their replenishment purchase.</p>
          </p>
        </div>
      </section>
    </>
  );
};

export default VideoArea;
