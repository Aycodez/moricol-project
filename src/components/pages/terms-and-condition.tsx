import Button from "@/components/button";

export default function TermsAndCondition() {
  return (
    <main className="px-20 py-5">
      <article className="mb-5 text-[#6D7280]">
        <p>
          Lorem ipsum dolor sit amet consectetur. Euismod interdum tincidunt
          eget pellentesque in turpis. Arcu tortor pellentesque in felis leo
          semper. Vitae quam vitae tellus accumsan lectus et vulputate auctor
          at. Vitae ipsum aliquet cras nibh euismod. Tincidunt condimentum
          scelerisque enim vitae purus eleifend maecenas non. Lorem eleifend
          tortor pulvinar porttitor. Nunc sed tortor viverra felis nisl molestie
          adipiscing. Sed in vitae scelerisque justo tortor nam porta arcu
          pulvinar. Eu sagittis luctus commodo convallis commodo sodales egestas
          arcu. Morbi duis varius eget at laoreet arcu enim nisi. Morbi viverra
          lobortis nisl ut vivamus laoreet fermentum vel. Aenean maecenas lorem
          sed et amet nullam viverra. Nunc vivamus egestas massa libero lectus
          dolor ac venenatis. Tincidunt a tempor quam eu elementum sit id
          condimentum ultrices. Venenatis id ut sem pulvinar ut eget sit sit
          enim. Mi duis quis venenatis sapien. Felis sit vel nisl suspendisse
          sed ornare natoque pretium turpis. Ornare nibh pulvinar morbi posuere
          libero condimentum id turpis cras. Sed cras tempor vitae ultrices ac.
          Urna commodo suscipit purus accumsan bibendum eu integer. Diam a mi
          hendrerit facilisi. Adipiscing ut aenean vulputate dictum eget nisl
          adipiscing arcu egestas. Vitae quis ut massa viverra gravida et est.
          Molestie mollis nisi adipiscing felis tristique blandit tellus
          ridiculus. Quisque purus aliquet sem sapien nulla viverra. Viverra
          vehicula amet adipiscing ac. Senectus.
        </p>
      </article>
      <form>
        <div className="mb-10 flex items-center gap-x-3">
          <input type="checkbox" className="h-5 w-5" />
          <label
            htmlFor="accept"
            className="text-grey-800 inline-block font-medium"
          >
            Do you agree to our Terms and Conditions?
          </label>
        </div>
        <Button className="max-w-[652px]">CONTINUE</Button>
      </form>
    </main>
  );
}
