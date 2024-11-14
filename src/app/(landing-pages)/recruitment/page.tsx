import { routes } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";

export default function Recruitment() {
  return (
    <section className="relative overflow-hidden bg-[#0093AD] p-20 text-center text-white">
      <div className="relative z-10 mx-auto mb-20 flex max-w-[1120px] flex-col items-center">
        <h1 className="mb-9 text-5xl font-extrabold lg:text-7xl">
          Making candidates become the best version of themselves
        </h1>
        <p className="mb-11 text-2xl">
          Moricol Healthcare Recruitment and Management Services is a
          multidimensional company using cutting edge technology to promote
          health and longevity of life
        </p>
        <div className="mt-9 flex w-full max-w-[600px] gap-x-2.5">
          <Link
            href={routes.RECRUITMENTDASHBOARD}
            className="w-full max-w-[293px] rounded-lg bg-primary-500 px-9 py-3 text-primary-50"
          >
            GET STARTED
          </Link>
          <button className="w-full max-w-[293px] rounded-lg border border-primary-500 bg-white px-9 py-3 text-primary-500">
            LOGIN
          </button>
        </div>
      </div>

      <Image
        src="/images/recruit.png"
        alt=""
        width={1100}
        height={727}
        className="relative z-10 mx-auto"
      />

      {/* Vector  */}

      <svg
        // width="2000"
        // height="454"
        viewBox="0 0 1440 454"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-screeen absolute bottom-0 left-0 z-0"
      >
        <path
          d="M108 268C30 268 0 224.748 0 224.748V454H1440V0C1419.18 153.169 1325.92 242.767 1158.43 242.767C1024.43 242.767 925.143 177.028 892.248 144.159C878.516 178.029 824.435 245.17 717.963 242.767C611.491 240.365 244.936 235.368 222 203.5C210.985 243.544 162.5 268 108 268Z"
          fill="white"
        />
      </svg>
      {/* Lines */}
      <svg
        width="1440"
        height="426"
        viewBox="0 0 1440 426"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-[250px] left-0 z-0 w-full"
      >
        <path
          d="M122.412 240.897C24.9415 267.462 -0.894173 347.318 69.4281 387.474C139.75 427.63 151.05 358.064 19.6304 200.08C-66.0316 114.949 -63.3987 -66.0793 151.05 28.7893C419.11 147.375 963.934 215.766 1086.65 122.277C1184.82 47.4869 1295.82 91.1147 1339.04 122.277C1390.03 159.034 1436 274.745 1280.73 377.645C1086.65 506.269 1083.17 329.332 1255.49 301.725C1393.35 279.639 1467.27 326.404 1487 352.547"
          stroke="#F0ABFC"
          strokeWidth="3"
        />
      </svg>
    </section>
  );
}
