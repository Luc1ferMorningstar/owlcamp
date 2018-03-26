import React  from 'react';
import './Logo.css';

const Logo = props => (
  <svg className='logo' width={240} height={71} {...props}>
    <defs>
      <linearGradient id="a">
        <stop stopColor="#b88746" offset={0} />
        <stop stopColor="#fdf5a6" offset={1} />
      </linearGradient>
    </defs>
    <path
      d="M89.592 30.145c5.132 0 8.212 3.453 8.212 8.446v6.952c0 4.946-3.08 8.352-8.212 8.352h-2.38c-5.132 0-8.212-3.406-8.212-8.352V38.59c0-4.993 3.08-8.446 8.212-8.446h2.38zm3.033 15.958v-8.166c0-2.24-1.214-3.126-3.033-3.126h-2.38c-1.82 0-3.033.887-3.033 3.126v8.166c0 2.146 1.213 3.126 3.033 3.126h2.38c1.82 0 3.033-.98 3.033-3.126zm39.002-15.771c.467 0 .747.28.56.793l-6.579 21.603c-.187.654-.56.934-1.073.934h-2.986c-.56 0-.887-.28-1.12-.934a531.33 531.33 0 0 1-4.573-14.837c-1.446 5.132-3.173 10.218-4.666 14.837-.186.654-.56.934-1.073.934h-2.986c-.56 0-.887-.28-1.12-.934l-6.486-21.603c-.186-.513.094-.793.56-.793h3.78c.466 0 .7.28.84.793 1.306 5.086 2.426 10.265 4.012 16.19 1.633-5.925 3.08-11.104 4.386-16.19.14-.467.374-.793.84-.793h3.64c.56 0 .84.326.933.793 1.306 5.086 2.8 10.265 4.386 16.19 1.586-5.925 2.8-11.104 4.106-16.19.14-.513.373-.793.84-.793h3.779zm2.981-8.632c0-.467.234-.7.7-.7h3.78c.466 0 .7.233.7.7v31.262c0 .466-.234.7-.7.7h-3.78c-.466 0-.7-.234-.7-.7V21.7zm22.206 16.61c-.56 0-.887-.326-.934-.886-.233-1.913-1.166-2.566-2.613-2.566h-2.286c-1.82 0-3.033.886-3.033 3.126v8.119c0 2.146 1.213 3.126 3.033 3.126h2.286c2.147 0 2.8-.7 3.733-1.913.327-.373.793-.327 1.26 0l2.24 1.586c.42.327.42.607.14.98-1.68 2.053-3.127 4.013-7.373 4.013h-2.286c-5.132 0-8.352-3.826-8.352-8.772v-6.486c0-4.992 3.22-8.445 8.352-8.445h2.286c4.293 0 7.373 2.8 7.84 7.139.046.653-.28.98-.887.98h-3.406zm25.238 14.932c.046.186.093.42-.14.42h-4.293c-.513 0-.84-.467-.84-1.12v-1.587c-1.073 1.633-2.613 2.94-4.993 2.94h-1.446c-4.34 0-7.512-2.613-7.512-7.279s2.566-6.766 7.419-6.766h6.532v-1.913c0-2.473-.886-3.126-3.313-3.126h-1.26c-2.38 0-4.152.607-5.132 1.027-.747.28-1.26.28-1.54-.374l-.98-2.286c-.186-.467-.233-.84.234-1.12 1.96-1.213 4.852-1.913 7.418-1.913h1.26c5.786 0 8.492 2.566 8.492 8.026v14.37c0 .234.047.514.094.7zm-9.239-4.013c2.52 0 3.406-1.027 3.966-2.24v-3.08h-6.439c-1.4 0-2.38.607-2.38 2.66 0 1.96.98 2.66 2.38 2.66h2.473zm37.79-19.084c5.179 0 6.952 3.313 6.952 8.212v14.605c0 .466-.234.7-.7.7h-3.78c-.466 0-.7-.234-.7-.7V37.844c0-2.146-1.073-3.033-3.08-3.033h-.606c-2.426 0-4.012 1.167-4.619 2.1v16.05c0 .467-.233.7-.7.7h-3.78c-.466 0-.7-.233-.7-.7V37.845c0-2.146-1.072-3.033-3.079-3.033h-.606c-2.427 0-4.06 1.167-4.62 2.1v16.05c0 .467-.233.7-.7.7h-3.779c-.466 0-.7-.233-.7-.7v-21.93c0-.466.234-.7.7-.7h3.78c.466 0 .7.234.7.7v2.24c.98-1.493 2.892-3.126 6.205-3.126h.327c3.406 0 5.319 1.4 6.252 3.78l.7-.654c.98-1.493 2.893-3.126 6.206-3.126h.326zm21.551 0c5.086 0 8.166 3.453 8.166 8.446v6.952c0 4.946-3.08 8.352-8.166 8.352h-1.213c-2.38 0-3.826-1.073-4.666-2.52v10.919c0 .466-.326.7-.653.7h-3.826c-.467 0-.7-.234-.7-.7V31.032c0-.467.233-.7.7-.7h3.826c.327 0 .653.233.653.7v1.446c.84-1.353 2.286-2.333 4.666-2.333h1.213zm2.986 15.958v-8.166c0-2.24-1.213-3.126-3.032-3.126h-2.8c-1.82 0-3.033.887-3.033 3.126v8.166c0 2.146 1.213 3.126 3.033 3.126h2.8c1.82 0 3.032-.98 3.032-3.126z"
      xmlnsName="mainText_mainfill"
      fill="#eeeff1"
    />
    <path
      d="M90.97 62.79h1.215L89.2 70.605h-1.065L85.6 64.2l-2.535 6.405H82l-3-7.815h1.23L82.555 69l2.49-6.21h1.11l2.49 6.21zM94.645 60v1.095h-1.23V60h1.23zm0 2.805v7.8h-1.23v-7.8h1.23zm5.505 1.89c-.3-.63-.795-1.02-1.515-1.02-.75 0-1.26.45-1.26 1.05 0 .54.285.93 1.065 1.215l.78.27c1.305.465 2.265.945 2.265 2.31 0 1.485-1.44 2.25-2.775 2.25-1.35 0-2.55-.78-2.835-2.085l.99-.3c.24.855.945 1.38 1.845 1.38.78 0 1.56-.45 1.56-1.23 0-.675-.465-1.035-1.275-1.32l-.87-.315c-1.365-.48-1.95-1.245-1.95-2.175 0-1.215 1.08-2.055 2.43-2.055 1.26 0 2.145.69 2.565 1.725zm6.3-2.025c1.77 0 4.14 1.35 3.825 4.485h-6.585c.195 1.71 1.53 2.55 2.94 2.55 1.08 0 1.77-.3 2.355-.87l.72.66c-.705.84-1.725 1.26-3.09 1.26-2.01 0-4.155-1.35-4.155-4.035 0-2.7 2.22-4.05 3.99-4.05zm0 1.065a2.814 2.814 0 0 0-2.76 2.505h5.505c-.15-1.68-1.575-2.505-2.745-2.505zm13.53.96c-.3-.63-.795-1.02-1.515-1.02-.75 0-1.26.45-1.26 1.05 0 .54.285.93 1.065 1.215l.78.27c1.305.465 2.265.945 2.265 2.31 0 1.485-1.44 2.25-2.775 2.25-1.35 0-2.55-.78-2.835-2.085l.99-.3c.24.855.945 1.38 1.845 1.38.78 0 1.56-.45 1.56-1.23 0-.675-.465-1.035-1.275-1.32l-.87-.315c-1.365-.48-1.95-1.245-1.95-2.175 0-1.215 1.08-2.055 2.43-2.055 1.26 0 2.145.69 2.565 1.725zm6.3-2.025c1.77 0 4.005 1.35 4.005 4.05s-2.235 4.035-4.005 4.035-3.99-1.335-3.99-4.035 2.22-4.05 3.99-4.05zm0 1.095c-1.26 0-2.79.975-2.79 2.955 0 1.965 1.53 2.94 2.79 2.94 1.275 0 2.805-.975 2.805-2.94 0-1.98-1.53-2.955-2.805-2.955zM132.895 60v10.605h-1.23V60h1.23zm4.515 10.725c-1.515 0-2.985-.975-2.985-3.39v-4.53h1.23v4.5c0 1.635.855 2.34 2.01 2.34 1.395 0 2.355-1.29 2.55-2.235v-4.605h1.23v7.8h-1.23V68.79c-.15.54-1.095 1.935-2.805 1.935zm9.285-6.885h-1.65v5.025c0 .465.18.75.63.75.39 0 .675-.09 1.005-.24v1.05c-.33.165-.72.27-1.335.27-.795 0-1.515-.36-1.515-1.725v-5.13h-1.08v-1.035h1.08v-1.83h1.215v1.83h1.65v1.035zm2.61-3.84v1.095h-1.23V60h1.23zm0 2.805v7.8h-1.23v-7.8h1.23zm5.37-.135c1.77 0 4.005 1.35 4.005 4.05s-2.235 4.035-4.005 4.035-3.99-1.335-3.99-4.035 2.22-4.05 3.99-4.05zm0 1.095c-1.26 0-2.79.975-2.79 2.955 0 1.965 1.53 2.94 2.79 2.94 1.275 0 2.805-.975 2.805-2.94 0-1.98-1.53-2.955-2.805-2.955zm9.42-1.08c1.515 0 2.985.975 2.985 3.39v4.53h-1.23v-4.5c0-1.635-.855-2.34-2.01-2.34-1.395 0-2.355 1.29-2.55 2.235v4.605h-1.23v-7.8h1.23v1.815c.15-.54 1.095-1.935 2.805-1.935zm8.31 2.01c-.3-.63-.795-1.02-1.515-1.02-.75 0-1.26.45-1.26 1.05 0 .54.285.93 1.065 1.215l.78.27c1.305.465 2.265.945 2.265 2.31 0 1.485-1.44 2.25-2.775 2.25-1.35 0-2.55-.78-2.835-2.085l.99-.3c.24.855.945 1.38 1.845 1.38.78 0 1.56-.45 1.56-1.23 0-.675-.465-1.035-1.275-1.32l-.87-.315c-1.365-.48-1.95-1.245-1.95-2.175 0-1.215 1.08-2.055 2.43-2.055 1.26 0 2.145.69 2.565 1.725z"
      xmlnsName="sloganText_mainfill"
      fill="#eeeff1"
    />
    <path
      d="M17.994 10.053L9.357 31.17l15.936 10.447-14.795-3.75 5.129 15.192 13.02 2.367-8.6 2.273 10.375 8.97 8.285-1.577-9.469 7.693 20.91 16.373 20.913-16.373-9.47-7.693 8.286 1.578 10.375-8.97-8.6-2.274 13.02-2.367L89.8 37.867l-14.795 3.75L90.94 31.17l-8.636-21.117-25.448 30.972 6.313 8.286-3.477 11.046-9.545 12.428-9.544-12.428-3.475-11.046 6.312-8.286-25.447-30.972zm25.99 35.416l-3.808 4.92 2.441 3.068 3.487-.348 1.052 3.887 2.992 4.832 2.995-4.832 1.052-3.887 3.487.348 2.441-3.068-3.809-4.92-5.095 1.285-1.07 8.517-1.069-8.517-5.096-1.285z"
      transform="matrix(.75694 0 0 .75694 3.917 3.39)"
      xmlnsName="symbol_mainfill"
      fill="url(#a)"
    />
  </svg>
);

export default Logo;