import React from 'react';

const Contact = () => {
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl">
       <section class="bg-white dark:bg-white-900">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-dark">Contact Us</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
      <form action="#" class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-pink-50 rounded-lg border border-pink-300 focus:ring-pink-300  " placeholder="name@flowbite.com" required/>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-pink-50 rounded-lg border border-pink-300 focus:ring-pink-300  " placeholder="Let us know how we can help you" required/>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-pink-50 rounded-lg border border-pink-300 focus:ring-pink-300 " placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-pink-50 rounded-lg border border-pink-300 focus:ring-pink-300  ">Send message</button>
      </form>
  </div>
</section>
        <div class="card-body p-3 mx-1">
        <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=concord%20tower%20,%20banglamotor%20dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org"></a><a href="https://www.embedgooglemap.net">google map code generator</a></div></div>
        </div>
      </div>
    );
};

export default Contact;