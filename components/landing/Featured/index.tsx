import { EyebrowText, Project, ValueProp } from "@/components/theme";

export function Featured() {
  return (
    <div className="xl:mt-36">
      <EyebrowText />
      <Project
        image=""
        summery=""
        link=""
        client=""
        date=""
      />
      <ValueProp
        number="01/02"
        content={[
          {
            content:
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor laboread praesentium facere vel nesciunt delectus consequatur.",
          },
        ]}
      />
    </div>
  );
}
