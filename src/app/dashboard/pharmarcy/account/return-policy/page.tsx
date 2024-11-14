import Button from "@/components/button";
import { refundPolicyAgreement } from "../../action";

export default function ReturnPolicy() {
  return (
    <section className="text-sm">
      <div className="border-b border-gray-300 pt-5">
        <h2 className="pb-5 font-bold text-primary-500">
          &larr; Return Policy
        </h2>
      </div>
      <p className="my-5 text-gray-500">
        Lorem ipsum dolor sit amet consectetur. Ornare magnis fusce in volutpat
        mauris. Leo at sit scelerisque turpis id quis. Eu iaculis at volutpat
        amet enim id pulvinar ornare diam. Dui turpis erat in est aliquam neque.
        Mauris quis gravida vitae massa blandit tempor in est risus. Bibendum ut
        at a massa. Cursus arcu amet eget vitae diam ultricies. Orci sagittis
        rhoncus sed faucibus. Sed penatibus amet elit pellentesque leo ornare.
        Egestas tincidunt donec egestas sed egestas eu. Urna eget augue nibh
        varius in fringilla sem aliquet aenean. Ultrices dignissim suscipit id
        fames ultricies scelerisque ultricies libero quisque. Risus adipiscing
        lectus tristique lorem lorem. Ac duis vestibulum feugiat enim nisi
        lorem. Id ullamcorper adipiscing faucibus at. Nec eget in rhoncus mi.
        Gravida a elit nisl maecenas nulla. Vel sit est ac urna ac velit in in.
        Euismod ullamcorper eu sed nullam. Interdum sodales proin sagittis ac
        nulla. Sed id auctor integer massa eget condimentum eget. Morbi
        condimentum cursus eu neque dolor vitae nisl metus. Id adipiscing
        sagittis viverra mi sagittis tellus volutpat id. Condimentum mus cum
        lacinia auctor nisl rhoncus nibh. Quis urna faucibus orci purus
        scelerisque senectus ridiculus quam. Phasellus blandit amet adipiscing
        aliquam vel erat venenatis congue. A ultricies ut nisl tortor. Laoreet
        cursus pharetra mi hendrerit pellentesque magna tristique tincidunt
        semper. Diam vulputate nulla ultricies tortor varius molestie nulla
      </p>

      <form className="mt-5" action={refundPolicyAgreement}>
        <div className="flex items-center gap-x-2">
          <input type="checkbox" id="agree" className="h-5 w-5" />
          <label htmlFor="agree" className="text-gray-500">
            You have agreed to our return policy
          </label>
        </div>
        <Button className="mt-10 lg:max-w-[360px]">Continue</Button>
      </form>
    </section>
  );
}
