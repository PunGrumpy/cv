'use client'

import * as React from 'react'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut
} from './ui/command'
import { Button } from './ui/button'
import { CommandIcon } from 'lucide-react'
import { DialogDescription, DialogTitle } from './ui/dialog'
import { useTheme } from 'next-themes'

interface Props {
  links: { url: string; title: string }[]
}

export const CommandMenu = ({ links }: Props) => {
  const [open, setOpen] = React.useState(false)
  const [isMac, setIsMac] = React.useState(false)
  const { theme, setTheme } = useTheme()

  const toggleTheme = React.useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }, [setTheme, theme])

  React.useEffect(() => {
    setIsMac(navigator.userAgent.includes('Mac'))

    const down = (e: KeyboardEvent) => {
      if (e.key === 'j' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen(open => !open)
      }
      if (e.key === 'd' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        toggleTheme()
      }
      if (e.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [theme, toggleTheme])

  return (
    <>
      <p className="fixed bottom-0 inset-x-0 hidden border-t border-t-muted p-1 text-center text-sm text-muted-foreground print:hidden xl:block bg-background/50 backdrop-blur-sm">
        Press{' '}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">{isMac ? '⌘' : 'Ctrl'}</span>J
        </kbd>{' '}
        to open the command menu.
      </p>
      <Button
        onClick={() => setOpen(open => !open)}
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4 flex rounded-full shadow-2xl print:hidden xl:hidden"
      >
        <CommandIcon className="my-6 size-6" />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <DialogTitle className="sr-only">
          Command Menu
          <DialogDescription>
            Press {isMac ? '⌘' : 'Ctrl'}J to open the command menu.
          </DialogDescription>
        </DialogTitle>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Actions">
            <CommandItem
              onSelect={() => {
                setOpen(false)
                window.print()
              }}
            >
              <span>Print</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setOpen(false)
                toggleTheme()
              }}
            >
              <span className="flex items-center gap-2">Toggle Theme</span>
              <CommandShortcut>
                <span>{isMac ? '⌘' : 'Ctrl'}</span>D
              </CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Links">
            {links.map(({ url, title }) => (
              <CommandItem
                key={url}
                onSelect={() => {
                  setOpen(false)
                  window.open(url, '_blank')
                }}
              >
                <span>{title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </CommandDialog>
    </>
  )
}
