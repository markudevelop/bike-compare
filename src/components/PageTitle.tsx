const PageTitle = ({ title = "" }) => {
  return (
    <h1 className="text-4xl font-bold text-center mb-12 text-white mt-12">
      {title}
    </h1>
  );
};

export default PageTitle;
