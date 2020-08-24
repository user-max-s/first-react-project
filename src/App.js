import React from 'react';
import './App.scss';

const App = () => {
  return (
    <div className="wrapper">
      <header className="header">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEVRgbj///9Ge7VOf7e4yN6gttRBeLRKfbZEebTf5vA+drNIfLW+zeH5+/1eir1Zh7vQ2+qIpsyCosqas9Pr8PZ4m8ZnkMCnvdjF0+XZ4u5vlcPt8feQrM+uwtvl6/OMqc17YYZ+AAAKj0lEQVR4nOWd7bqqIBCFCRLIMj9Kc/d5/3d5sHZlKTNjWyU563nO+Vf5bpAZBliw2WeKzj9JOd8Fm2Oa5/uiWMcx61NxvC6KfZ6nx02wm5fJzzmKPntS1hUsWQXZfi2kNuJcKaGEYKz617NuX2u+X3Fe/ZhUcZEF8+TckZROeEh2acylwTK/3T8QDdrASh5nu+TQM+FinsWhXrrhakosdciy+aInwqhMmeTfAveQaU/N0hXeZRHCaJWHfICXrB8ZyjDHIEHCxVFx5RoDkXnCC9hdAcJkL9W3tl5dQski+YAwKeQU8G4S2s5oIdzmE+KrJGS+7UK4C6fFV0mFOzLhtuCuH/cj8aKtGVsIy4l10KeELCmEgXT9oH+QDHDCy5QBDeIFI8ym+Qo+xTOY8DJ1QIN4gQgn/Q7e9fYuvhCWPgAaxNJGuPUDkLFwayEsphoH3yWKdsLd9EeZu/iujfAcun6uHlXrp0/C/Nvnul0k8iZh4sswc5NMGoTeDDM3PQcb5mcT1hqR+dmEphH3r4QL35rQNOLihfDo00B6kzrWCaNJlA27SaioRrjyJ515Sq9qhF5F+7tU/iSMfErYngqjB2HpYyc1+Xf5IEz9G2cqifRB6GhJd2gJdif0MNzfdA36FeHcz9fQvIjzX8LMz05qumn2S9jvTpiv0o3w4Gc0rBQeroSJdv0gg0knV8Ld0vWDDKbl7kroabyvVMV85vVAw+KKMPI1GlbikSE8+5rRVJJnQ+jxUHodTJm/OVslk7exWeA1YWAIvc1KK5nMlPlXC65L7A2hz+GwCojMx1LpU0JFLPI5HJqAGLGzz+HQBMQz+/Gc8Id5ndJUSQ0rPScsmddJW5W2MY920bRpuWOBj8tOT6mAbTwn3LCjzymNSWqOLPW8DVOWe96GmfeEOdu7foZhJfascP0MA6tga2IvFYo3hc0tRctnHqL9cNvPLulnPgWVUOhic5q/67QpwNmlTpufeX44JTAqmQfNj+5SRc3ExJqRihhC2Y73/UB7ACzn5e7aor8tj7YjsEfqhCGmEUr7Gc2Dtcdo9Kw1NjeVc/tn98SOSiSMgce0Tb9eNsxbBP84PwIfpW5UoxXa1PtZohdZypEqhz50UwYlVPetd+3qd5cTTGhpREEwMwA3ffLmSbuaTr0SIh3OEjM48Bb9ClxRCEFniH5L9UKBz2lrCYmMpTChADvOrOfiizxDP2YbEsX6L4QhOBT3XUD73Yxqk+1jS7gZQEJkoOp7PUlB47Z5UNtujraTx0RCIAQbHfquECLjonWhXIhPCZHBzfo3/Vjwi2hPMPTpQ0INNmHUv5sMh5/UnmBA2RBAiAxSA5RAHydQLLL+ovz5iBB+CwdoQvOTsDGTtSa5bDerQAixt3CIKjaSoNjHGrDxbY868kB6e1JkpmA7sSH4B4QKficuwxRAQ3g0tZ7u01D3thBKMJ0Z6jjvEsz07VM9MM60E6oU/KXBDvjA4751axXYHu2E8Kg23JIu/PbPZpZqRndCeF5oTYL/LmQ2Y4vCnQmFAA3YhlzvREKiJQx3JoSz9UGdLZDeY8mGuxIikWLQZRZkpm8549eVEI5KA7uvYIWX1kbsSIh0lIEtHLGqROuO8W6EAo5Jx6EPTnwyZe9GGIJTkZ/B9+BhyWnbPsdOhHwDfj91newPgmd7s9mpmW90IUT66G6E7Vtopb6ZnXYhRDLuUfanYY3YrPB3IESKOuNs10YbsVGTohMi393yBgwieLCbzRbvYb9DG4L56GhGZEhS1QxZZEK4ij/bj7azCS5kmojxlnZQCSW8cDBWH2WEpd3V67MQCTWcrW3HPMmLJTZv6T+NkMOFi7GPvSCEB11/HBKhRgDHiPU1IWHrrZ+ChL9L1Rpe2hrdLE9wzMy+vgEBJLzFFouJ81Mj5KOvAneBVIpqTwRnYnuutEBG59lm/K3oSHX4ZZoDE0abCxwlqi9z4IiAhv3Z/IEIE1I0Ph9Dw7PR8d6z/kzo5owrUtOsdDeVRlaPUbk6PbjEBhsT+G+I8sMrfu5yZuiI5MmVsuuzIcsd30tI2Xl4CrkKsfQA0yAr2iShmY3RYXdEhyRUI84q3oQsY/Sn8WaGb8KDYk+KnJmtaXx3ZT+yb7QeHHGsfrp1hThaP51tXXVUynjajw6ufBH+mpJ1QHR1XR+6C3jyiMhikQ+I2B6UHuVquMHnUb3prJ0g/jVkRAf6n8iRhwe2CQVUspZSxhvqkFy6MbEMsSK4XdHtAjQuM2J6dHIyWxSfR8XHgqqSxOTBQWWxQoRX/gDVjmfpPa0ZcydOnerTwF+vowlOCzyjF8BviISzhhghE7SKR+QCsOU+tw8I2y6+a5OjS430R4jv1V5NCq6OLk/7CLFRz+ZryqDlyOqRf/AuNh9VxJQh1VFxatk9f2vbQcsIiJGrqgbp748QmuhK+Jbhdym2SwhkPxGFkJZABK7qxJALApXQ9AUCopvAz6ghDSYkFUfcXVmxjDvk4bZhnzLp3FAT1N4NWonJF0jIlnjoIS5KEZ0/ukkX1GYEzgHjvZ12emYQQjNjJJbggOREo18RkYbTmOyi1E1ckBYOofQLnxNTrjwQ64EImdBrwnQPdv7AqiMUixpRDOf1ZRjRAg583hVDJJ1ELIb0axM6PsGxG95UKZByM4VQ7Af23OMyA54Sq38iiJTLVUQ+uKug0OpStufSZ/zD0HBDWv0W2Qjel0Jpvd6U7zFyQSoM6ty2cWexpjy5SkfyLzWUUq6zY3Car1bzU3DZa0n706qw2JjPvGkeFJJmpXcc1YNWVRaBmmJHWJdQXL+L6klYedD67yPsvxe0/37e/nuy+++r7//dCP7fb+H/HSWe3zMj/oe7gsh2tZPU9b4n/+/s8v/eNa/TtuvdeV4nNdf7D/2/w9L/e0i9Dojxf3IfsP93Ons8mP7ey+3/3epujhKPo9mN0NvM9Gr1WBF6m7ddLfQqQncbNwbW9aT81ajE2RHGYXVzkr/+52nMv7n1Xgn7vdHka8TLB2G7L+fkFUYPwuHslV3qd3v9jZB6tdCkpMsaoY9F0/tlSr+2VuC1RNPU/V6VX0IPg/7dGOduTeZdXfhxKcOd0JlJylB6bDZ62MuN7Go3tJ7uMg9CzxrxuV/saRHo1aWy4rmL+kk4qr3k0Aq3LYSD3jowsnjNp7BuZOnNYPNiYlUnHM2qd2i9XEv4Ykbq6Ohi33r1kH21Ww18QJSvFghvhrKX6Y82/O0syrtlbjp1xMaZ64Yp8GXaHbV5dq5pezzpd1E2bUhajJ1L2g7qL5Roc+Jus67eFtN8GXnRdj1vuzn3LpxeMwqLpbTFfnybT6yrCplb7le2GqwnxAMNXyEhC+v5IcBCPtnLSRQZhQL4QMLZbHFU+tvLjOYJL6DjL3INQFTmYacDLqNKKB7mK+TwPn6JfVSmTDoz87VKCC5ZWuLeBDhhpcU8i0O9/BZMsdQhy+Y0L3QaYaVDskvXXFaHqoQrfz/BuZY8znYJ3WOETnhVdE5WQbZfC3k9QbZUSqjKIHYAk9jb15rvV8vr2TWp4iIL5sm5o7FYR8Ia6k9SznfB5pjm+b4o1nG/GwDjeF0U+zxPj5tgNy+Tn3P0oWXaP5ipfQjAWYsSAAAAAElFTkSuQmCC" />
      </header>
      <div className="container">
        <nav className="nav">
          <ul className="menu">
            <li><a className="menu__item">Profile</a></li>
            <li><a className="menu__item">Messages</a></li>
            <li><a className="menu__item">News</a></li>
            <li><a className="menu__item">Music</a></li>
            <li><a className="menu__item">Settings</a></li>
          </ul>
        </nav>
        <main className="main">
          <img src="https://www.klaviyo.com/wp-content/uploads/2016/09/abstract-background-1024x273.jpg" />
          <div className="main__profile-info">
            <img src="" />
            <div className="">
              <h2>Dmitriy K.</h2>
              <p>Date of Birth: 2 january</p>
              <p>City: Minsk</p>
              <p>Education: BSU*11</p>
              <p>Web Site: https//:google.com</p>
            </div>
            <div className="main__posts">
              <h2>My posts</h2>
              <textarea></textarea>
              <button>Send</button>
              <div className="post">
                <img src="" />
                <p>Hey why nobody love me?</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App;
