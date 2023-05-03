import Router, { useRouter } from "next/router";

export default function Page() {
  const { query } = useRouter();
  const dynamicPart = query["dynamic-part"];

  return (
    <div>
      {query.segments?.map((segment, i) => (
        <div key={i}>
          <button
            onClick={() => {
              const newSegments = query.segments
                .map((s, j) => (j == i ? Number(s) - 1 : s))
                .join("/");
              void Router.replace(`/${dynamicPart}/${newSegments}`);
            }}
          >
            -
          </button>
          {segment}
          <button
            onClick={() => {
              const newSegments = query.segments
                .map((s, j) => (j == i ? Number(s) + 1 : s))
                .join("/");
              void Router.replace(`/${dynamicPart}/${newSegments}`);
            }}
          >
            +
          </button>
        </div>
      ))}
    </div>
  );
}
