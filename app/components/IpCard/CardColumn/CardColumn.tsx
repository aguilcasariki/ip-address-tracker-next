"use client";
interface CardColumnProps {
  colTitle: string;
  colInfo: string;
  colError?: string | null;
}

export default function CardColumn({
  colTitle,
  colInfo,
  colError,
}: CardColumnProps) {
  return (
    <div className="card_column items-center flex flex-col font-bold wrap-anywhere px-4">
      <h2 className="card_column-title text-[0.625rem] text-dark-gray">
        {colTitle}
      </h2>
      <p className="card_column-info mt-1 md:text-lg text-center">
        {colError ? "Error" : colInfo}
      </p>
    </div>
  );
}
