import { IClient } from "../../type";
import Image from "next/image";

interface ClientCardInfoProps {
  client: IClient;
}

const ClientCardInfo = ({ client }: ClientCardInfoProps) => {
  return (
    <div className="p-4 border-lime-200  border-2 min-h-60 flex flex-col items-center justify-center w-56 md:w-80 h-80">
      <Image
        src={client["client_photo_url"]}
        alt="avatar"
        width={60}
        height={60}
        className="rounded-full"
        layout="intrinsic"
      />
      <p className="my-2">{client["client_name_value"]}</p>
      <p className="text-center my-3">{client["post_title"]}</p>
    </div>
  );
};

export default ClientCardInfo;
