import Router, { useRouter } from "next/router";

export default function Page() {
  const { query } = useRouter();

  return (
    <div>
      {query.segments?.map((segment, i) => (
        <div key={i}>
          <button
            onClick={() => {
              const newSegments = query.segments
                .map((s, j) => (j == i ? Number(s) - 1 : s))
                .join("/");

              void Router.replace(`/${query["dynamic-part"]}/${newSegments}`);
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

              void Router.replace(`/${query["dynamic-part"]}/${newSegments}`);
            }}
          >
            +
          </button>
        </div>
      ))}
    </div>
  );
}
