import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [{ title: 'Gautier Blandin - Software Engineer' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function Index() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mt-12">
        <h1>Welcome to Remix</h1>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate consectetur scelerisque. Phasellus
          laoreet sapien ac eleifend vulputate. Aliquam erat volutpat. Sed venenatis non nisi gravida cursus. Vestibulum
          scelerisque, sapien eu iaculis condimentum, ante justo volutpat nunc, ut luctus quam lorem nec augue.
        </p>
        <br />
        <p>
          Vestibulum dui lorem, aliquet vehicula vehicula sit amet, vestibulum facilisis leo. Donec mollis velit magna,
          pellentesque posuere ex porta ac. Praesent dolor elit, molestie eget eleifend vitae, congue a elit. Maecenas
          in mattis lacus, ac hendrerit nisl. Nullam bibendum efficitur rutrum. Aliquam vel suscipit elit, sit amet
          feugiat risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          Nulla at iaculis dolor. Integer id justo eu nisl fermentum porttitor. Ut sem mi, mattis eget magna quis,
          suscipit aliquam ante. Sed eget iaculis lectus. Aenean tristique augue et tortor lobortis, vitae dictum erat
          facilisis. Phasellus at iaculis libero. Fusce rhoncus non metus vitae feugiat. Donec tristique mi vitae risus
          rutrum sodales. Nullam sit amet tincidunt massa, eget viverra metus. Maecenas volutpat urna nunc, id molestie
          arcu commodo sit amet. Nulla non commodo velit. Proin ultricies sodales justo, at finibus tortor laoreet et.
          Nunc a dictum risus. Sed egestas augue ipsum. Morbi dignissim ex quis nunc semper consequat. Cras quis
          volutpat lectus, et lacinia massa. Integer laoreet ante odio, id vestibulum tortor faucibus at. Pellentesque
          quis interdum mauris. Mauris pharetra molestie magna nec iaculis. Donec mollis condimentum libero id
          ullamcorper. Quisque laoreet molestie lorem, vel cursus magna sodales non. Donec hendrerit ac ex nec egestas.
          Nulla aliquam est nec odio sagittis condimentum. Quisque rhoncus scelerisque pharetra. Quisque blandit leo id
          varius iaculis. Vestibulum sollicitudin ex sed augue convallis, vitae fermentum magna porttitor. Donec sit
          amet lorem ante. Nullam egestas purus eu purus semper egestas. Curabitur nec est vitae risus posuere
          sollicitudin. Aenean eget dapibus nisl, sit amet volutpat massa. Praesent massa sapien, rutrum ac felis at,
          ultrices semper ante. Morbi at maximus libero. Aenean tellus eros, viverra nec enim non, tincidunt maximus
          quam. Vestibulum ac lacus quam. Sed ullamcorper nisi sit amet diam vestibulum, non facilisis eros scelerisque.
          Quisque porta lobortis ultrices.
        </p>
      </div>
    </div>
  );
}
