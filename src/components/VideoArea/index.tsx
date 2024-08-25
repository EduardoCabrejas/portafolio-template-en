const VideoArea: React.FC = () => {
  return (
    <>
      <div className="projectsContainer">
        <div className="videoContainer">
          <iframe
            className="video"
            src="https://youtube.com/embed/i4scN6wH3DQ"
            title="Proyecto Integrador Nro. 3"
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
            title="Proyecto Integrador Nro. 4"
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
            title="Presentación del Proyecto Final"
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
      </div>
    </>
  );
};

export default VideoArea;
