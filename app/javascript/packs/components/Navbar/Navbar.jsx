import React from "react";
import logoinverted from "images/logo-inverted.svg";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  render() {
    const { isOpen } = this.state;
    return (
      <header class="bg-gray-900 sm:flex sm:justify-between">
        <div class="flex justify-between items-center px-3 py-2">
          <div>
            <img class="h-8" src={logoinverted} alt="Workation" />
          </div>
          <div class="sm:hidden">
            <button
              type="button"
              class="text-gray-500 focus:text-white focus:outline-none hover:text-white block"
              onClick={() => {
                this.setState(state => ({ isOpen: !state.isOpen }));
              }}
            >
              <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                  className={isOpen ? "" : "hidden"}
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
                <path
                  className={isOpen ? "hidden" : ""}
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          class={`px-2 pt-2 pb-4 ${
            isOpen ? "" : "hidden"
          } sm:block sm:flex sm:pt-4`}
        >
          <a
            href="#"
            class="px-2 py-1 block text-white font-semibold hover:bg-gray-800 rounded sm:px-4"
          >
            List your property
          </a>
          <a
            href="#"
            class="mt-1 sm:mt-0 px-2 py-1 block text-white font-semibold hover:bg-gray-800 rounded sm:px-4"
          >
            Trips
          </a>
          <a
            href="#"
            class="mt-1 sm:mt-0 px-2 py-1 block text-white font-semibold hover:bg-gray-800 rounded sm:px-4"
          >
            Messages
          </a>
        </div>
      </header>
    );
  }
}

export default Navbar;
