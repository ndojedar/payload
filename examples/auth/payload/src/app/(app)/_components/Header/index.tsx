import { headers as getHeaders } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { getUser } from '../../actions/getUser'
import { Gutter } from '../Gutter'
import { HeaderNav } from './Nav'
import classes from './index.module.scss'

export async function Header() {
  const headers = getHeaders()
  const user = await getUser(headers)

  return (
    <header className={classes.header}>
      <Gutter className={classes.wrap}>
        <Link className={classes.logo} href="/">
          <picture>
            <source
              media="(prefers-color-scheme: dark)"
              srcSet="https://raw.githubusercontent.com/payloadcms/payload/main/packages/payload/src/admin/assets/images/payload-logo-light.svg"
            />
            <Image
              alt="Payload Logo"
              height={30}
              src="https://raw.githubusercontent.com/payloadcms/payload/main/packages/payload/src/admin/assets/images/payload-logo-dark.svg"
              width={150}
            />
          </picture>
        </Link>
        <HeaderNav user={user} />
      </Gutter>
    </header>
  )
}

export default Header