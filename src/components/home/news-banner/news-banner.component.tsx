import { LatestNewsModel } from "./models/latest-news.model";

const latestNews: LatestNewsModel = {
  title: "Le site fait peau neuve !",
  caption:
    "Pour votre confort notre équipe vous propose un tout nouveau design.",
  linkId: "",
  type: 0,
};

export default function NewsBannerComponent() {
  return (
    <div>
      <div></div>
      <div>
        <h2>{latestNews.title}</h2>
        <p>{latestNews.caption}</p>
      </div>
    </div>
  );
}
