import { Component, Host, h } from '@stencil/core';
  
  @Component({
    tag: 'swc-icon-orange'
  })
  export class SwcIconOrange {
    render() {
      return <Host class="swc-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M544 894.72a382.34 382.34 0 0 0 215.936-89.472L577.024 622.272c-10.24 6.016-21.248 10.688-33.024 13.696v258.688zm261.248-134.784A382.34 382.34 0 0 0 894.656 544H635.968c-3.008 11.776-7.68 22.848-13.696 33.024zM894.656 480a382.34 382.34 0 0 0-89.408-215.936L622.272 446.976c6.016 10.24 10.688 21.248 13.696 33.024zm-134.72-261.248A382.34 382.34 0 0 0 544 129.344v258.688c11.776 3.008 22.848 7.68 33.024 13.696zM480 129.344a382.34 382.34 0 0 0-215.936 89.408l182.912 182.976c10.24-6.016 21.248-10.688 33.024-13.696zm-261.248 134.72A382.34 382.34 0 0 0 129.344 480h258.688c3.008-11.776 7.68-22.848 13.696-33.024zM129.344 544a382.34 382.34 0 0 0 89.408 215.936l182.976-182.912A127.2 127.2 0 0 1 388.032 544zm134.72 261.248A382.34 382.34 0 0 0 480 894.656V635.968a127.2 127.2 0 0 1-33.024-13.696zM512 960a448 448 0 1 1 0-896 448 448 0 0 1 0 896m0-384a64 64 0 1 0 0-128 64 64 0 0 0 0 128"/></svg></Host>;
    }
  }
  