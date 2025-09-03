export default function CardColumn({ columnData }) {
  return (
    <>
      {columnData.map((data, i) => (
        <div
          key={i}
          className={`card_column items-center flex flex-col font-bold  ${
            i === 0 ? "" : "md:border-l md:border-solid md:border-dark-gray"
          }`}
        >
          <h2 className="card_column-title text-[0.625rem] text-dark-gray">
            {data.title}
          </h2>
          <p className="card_column-info mt-1 md:text-lg text-center">
            {data.info}
          </p>
        </div>
      ))}
    </>
  );
}
