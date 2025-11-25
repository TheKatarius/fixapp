export interface OpinionCardProps {
  rate: number;
  description: string;
  name: string;
  logo?: string;
}

export const OpinionCard = ({ logo, rate, description, name }: OpinionCardProps) => {
  const renderStars = (numStars: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < numStars) {
        stars.push(
          <span key={i} className="text-lg text-yellow-400">
            ★
          </span>,
        );
      } else {
        stars.push(
          <span key={i} className="text-lg text-gray-300">
            ★
          </span>,
        );
      }
    }
    return stars;
  };

  return (
    <div className="flex h-auto min-h-[160px] w-full flex-col justify-between rounded-xl bg-white p-5 shadow-lg">
      <div className="mb-4 flex items-center">
        {logo && <img src={logo} alt="Logo klienta" className="mr-4 h-10 w-10 rounded-full object-cover" />}
        <div>
          <p className="text-sm font-semibold text-gray-700">{name}</p>
          <div className="flex items-center">
            {renderStars(rate)}
            {rate && <span className="ml-2 text-sm text-gray-600">{rate}/5</span>}
          </div>
        </div>
      </div>
      <p className="flex-grow text-base text-gray-800 italic">"{description}"</p>
    </div>
  );
};
