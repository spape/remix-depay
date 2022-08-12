// @ts-ignore
import DePayWidgets from "@depay/widgets";

export default function Index() {
  return (
    <div>
      {DePayWidgets.Donation({
        integration: "e3f091c4-0367-4f29-9e67-3daf3fa4c49e",
        accept: [
          {
            blockchain: "ethereum",
            token: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
            receiver: "0x8c34fffee7cf20dfc51bfc2cde5d0f4a84af40e8",
          },
          {
            blockchain: "ethereum",
            token: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
            receiver: "0x8c34fffee7cf20dfc51bfc2cde5d0f4a84af40e8",
          },
        ],
      })}
    </div>
  );
}
